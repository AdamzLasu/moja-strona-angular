import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
     <div class="navbar is-dark">
      <!--Logo-->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img routerLink="/" src="assets/img/angular-logo.png">
        </a>
      </div>

      <!--Menu-->
      <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" routerLink="/">Strona Główna</a>
        <a class="navbar-item" routerLink="/contact">Kontakt</a>
        <a class="navbar-item" routerLink="/kontakt">Kontakt2</a>
        <a class="navbar-item" routerLink="/lista">Lista</a>
        <a class="navbar-item" routerLink="/users">Użytkownicy</a>
      </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class HeaderComponent {

}
