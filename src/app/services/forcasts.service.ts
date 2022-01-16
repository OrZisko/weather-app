import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CitySugg } from '../models/city-sugg';
import { ApiService } from './api.service.service';

@Injectable({
  providedIn: 'root'
})
export class ForcastsService {

  constructor(private apiService: ApiService) { }
  private _favorites$ = new BehaviorSubject([])
  favorites$ = this._favorites$.asObservable()  

  query() { 
    var favCities = this._getItem('CitiesKeys')
    if (!favCities) {
      favCities = []
      this._setItem('CitiesKeys', favCities)
    } 
    this._pushForcasts(favCities)
  }

  addFavCity(city: CitySugg) {
    console.log('hii');
    const favCities = this._getItem('CitiesKeys')
    favCities.push(city)
    this._setItem('CitiesKeys', favCities)
    this._pushForcasts(favCities)
  }

  private _pushForcasts(cities: CitySugg[]) {
    const favsForcasts = cities.map(city => this.apiService.getCityForcasts(city))
    this._favorites$.next(favsForcasts)
  }

  private _getItem(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  private _setItem(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  }

}
