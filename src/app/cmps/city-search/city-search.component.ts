import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CitySugg } from 'src/app/models/city-sugg';
import { ApiService } from 'src/app/services/api.service.service';

@Component({
  selector: 'city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  @Input() suggestions:CitySugg[]
  @Output() onSearchCity = new EventEmitter()
  @Output() onChooseCity = new EventEmitter()
  cityTerm = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  chooseCity(city) {
    this.cityTerm = '';
    this.onChooseCity.emit(city);
  }
}
