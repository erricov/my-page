import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; // AngMaterial Animations
import { MaterialModule } from './material'; // Modulos de AngularMaterial declarados en un archivo aparte

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { MyDialogComponent } from './home/my-dialog/my-dialog.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { InfoDetailComponent } from './aboutme/info-detail/info-detail.component';
import { PortfolioComponent } from './portfolio/portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ContactComponent,
    HomeComponent,
    MyDialogComponent,
    CarouselComponent,
    FooterComponent,
    AboutmeComponent,
    InfoDetailComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [
    MyDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
