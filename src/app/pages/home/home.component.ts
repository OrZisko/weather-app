import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CitySugg } from 'src/app/models/city-sugg';
import { ApiService } from 'src/app/services/api.service.service';
import { ForcastsService } from 'src/app/services/forcasts.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService:ApiService, private forcastsService: ForcastsService) { }

  citySuggestions:CitySugg[] = null;
  forcasts:any = null
  forcastsSub:Subscription 
  suggSub:Subscription
  currCity:CitySugg

  ngOnInit(): void {
  }

  onSearchCity(term:string) {    
    this.suggSub = this.apiService.getCityOptions(term).subscribe(
      res => this.citySuggestions = res
    )
  }

  onChooseCity(city:CitySugg) {
    this.currCity = city
    this.forcastsSub = this.apiService.getCityForcasts(city).subscribe(
      res => {
        this.forcasts = res
      }
    )
  }

  onLikeCity() {    
    this.forcastsService.addFavCity(this.currCity)
  }

}
