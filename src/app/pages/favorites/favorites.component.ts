import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ForcastsService } from 'src/app/services/forcasts.service';

@Component({
  selector: 'favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private forcastsService: ForcastsService) { }

  favorites$: Observable<any[]>
  ngOnInit(): void {
    this.favorites$ = this.forcastsService.favorites$
  }
}
