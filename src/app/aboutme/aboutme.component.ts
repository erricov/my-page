import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  informaciones: object[];

  showElement(number) {
    if (number === 1) {
      this.informaciones = [
        {'id': 0, 'titulo': 'Habilidades', 'texto': 'lorem jutstu uzumakki'}
      ];
    }

    if (number === 2) {
      this.informaciones = [
        {'id': 1, 'titulo': 'Experencia', 'texto': '<strong>' + 'IDIOMAS' + '</strong>' + 'Español, Ingles, Italiano'}
      ];
    }

    if (number === 3) {
      this.informaciones = [
        {'id': 2, 'titulo': 'Formacion', 'texto': 'lorem jutstu uzumakki'}
      ];
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
