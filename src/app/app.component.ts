import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--Header-->
    <app-header></app-header>
   
    <app-contact></app-contact>

    <app-home></app-home>

    <!--Routes-->
    <router-outlet></router-outlet>

    <!--Footer-->
    <app-footer></app-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'moja-strona-angular';
}
