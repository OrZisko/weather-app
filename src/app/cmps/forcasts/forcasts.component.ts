import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'forcasts',
  templateUrl: './forcasts.component.html',
  styleUrls: ['./forcasts.component.scss']
})
export class ForcastsComponent implements OnInit {

  @Input() forcasts
  constructor() { }

  ngOnInit(): void {
  }

}
