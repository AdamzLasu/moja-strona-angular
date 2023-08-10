import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <div class="navbar is-dark">
      <!--Logo-->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/angular-logo.png">
        </a>
      </div>

      <!--Menu-->
      <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" routerLink="/">Strona Główna</a>
        <a class="navbar-item" routerLink="/contact">Kontakt</a>
      </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
