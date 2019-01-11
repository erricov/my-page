import { NgModule } from '@angular/core'; // Importa el NgModule que me permite crear un nuevo modulo
import {MatButtonModule, MatCheckboxModule} from '@angular/material'; // Modulos de AngularMaterial que se utilizaran
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule],
})
export class MaterialModule {
}
