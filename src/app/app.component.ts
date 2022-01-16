import { Component, OnInit } from '@angular/core';
import { ForcastsService } from './services/forcasts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-to-work';
  constructor (private forcastsService: ForcastsService) {}
  ngOnInit(): void {
      this.forcastsService.query()
  }
}
