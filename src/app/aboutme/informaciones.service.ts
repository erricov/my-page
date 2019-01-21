import { Injectable } from '@angular/core';
import { INFORMACIONES } from './mock-information'; // IMPORTAMOS EL ARRAY DE OBJETOS

@Injectable({
  providedIn: 'root'
})
export class InformacionesService {

  // CUANDO SE LLAME A ESTE METODO RETORNAREMOS LOS DATOS GUARDADOS EN INFORMACIONES
  getInfos(){
    return INFORMACIONES;
  }

}
