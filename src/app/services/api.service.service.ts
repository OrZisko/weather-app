import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of, tap } from 'rxjs';
import { CitySugg } from '../models/city-sugg';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCityOptions(str:string) {
    return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=wgI5wWF5chL9O8XkWsreGzuIqFpAF4Ge&q=${str}`).pipe(
      map((res:any) => res.map(citySugg => ({key: citySugg.Key, city:citySugg.LocalizedName})))
    )
  }

  getCityForcasts(city:CitySugg) {
    var forcasts = JSON.parse(localStorage.getItem(`CityKey${city.key}`))
    if (forcasts) return of(forcasts)
    else {
      return this.http.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city.key}?apikey=wgI5wWF5chL9O8XkWsreGzuIqFpAF4Ge`).pipe(
        map((res: any) => {res.city = city.city; return res}),
        tap(res => localStorage.setItem(`CityKey${city.key}`, JSON.stringify(res)))
      )
    }
  }
}
