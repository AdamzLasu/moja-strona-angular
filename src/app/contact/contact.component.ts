import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
    <div class="hero body">
    <div class="container">
      <h1 class="title">Skontaktuj się z nami!</h1>
    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">

      <!--Contact form -->
      <form>
        <!-- Name -->
        <div class="field">
          <label class="label">Imię</label>
          <input type="text" name="name" class="input">
        </div>

        <!-- Surname -->
        <div class="field">
          <label class="label">Nazwisko</label>
          <input type="text" name="surname" class="input">
        </div>

        <!-- Email -->
        <div class="field">
          <label class="label">Email</label>
          <input type="email" name="email" class="input">
        </div>

        <!-- Message -->
        <div class="field">

        </div>

        <!-- Button -->



      </form>

    </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent {

}
