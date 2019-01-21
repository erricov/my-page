import { Information } from './../information';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.css']
})

export class InfoDetailComponent implements OnInit {
  @Input() info: Information;
  
  constructor() { }

  ngOnInit() {
  }

}
