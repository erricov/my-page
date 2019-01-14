import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactInfo =
    {'email': 'elyerrico@gmail.com', 'number': '+39 392 523 8575', 'address': 'Sannicandro di Bari, Italy'}
  ;
  constructor() { }

  ngOnInit() {
    console.log('Hola');
  }

}
