import { Information } from './information';
import { Component, OnInit } from '@angular/core';
import { InformacionesService } from './informaciones.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  selectedInfo: Information; // AQUI SE LE ASIGNA LA CLASE Information a la variable SelectedINfo
  infos: Information[]; // SE INICIALIZA EL ARRAY DONDE SE GUARDARAN LAS INFOS

  // MOSTRAR INFORMACION ESPECIFICA
  showElement(info: Information): void {
    this.selectedInfo = info; // le asignamos a la variable glbal SelectecInfo el valor recibido de info
  }


  constructor(infoService: InformacionesService) { 
    this.infos = infoService.getInfos(); // OBTENEMOS LA DATA DEL INFOSERVICE Y SE LA ASIGNAMOS A INFOS
  }

  ngOnInit() {
  }

}
