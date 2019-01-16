import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
   homeIcon: any = '<mat-icon>home</mat-icon>';
  opciones = [
    {'id': 1, 'name': 'Portafolio', 'route': '/portafolio'},
    {'id': 2, 'name': 'About me', 'route': '/aboutme'},
    {'id': 3, 'name': 'Contact', 'route': '/contact'}
  ];
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
