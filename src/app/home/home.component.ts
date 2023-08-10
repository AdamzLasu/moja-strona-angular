import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        Moja strona główna
      </p>
    </div>
    </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/pexels.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent {

}
