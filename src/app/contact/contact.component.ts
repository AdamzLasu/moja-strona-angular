import { Component, OnInit } from '@angular/core';

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
      <form (ngSubmit)="submitForm()">
        <!-- Name -->
        <div class="field">
          <label class="label">Imię</label>
          <input type="text" name="name" class="input" [(ngModel)]="name">
        </div>

        <!-- Surname -->
        <div class="field">
          <label class="label">Nazwisko</label>
          <input type="text" name="surname" class="input" [(ngModel)]="surname">
        </div>

        <!-- Email -->
        <div class="field">
          <label class="label">Email</label>
          <input type="email" name="email" class="input" [(ngModel)]="email">
        </div>

        <!-- Message -->
        <div class="field">
          <label class="label">Wiadomość</label>
          <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
        </div>

        <!-- Button -->
        <button type="submit" class="button is-large is-warning">
          Wyślij!
        </button>


      </form>

    </div>
    </section>
  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit  {
  name: string;
  surname: string;
  email: string;
  message: string;



  
  constructor() {}

  ngOnInit() {}

  submitForm(){
    const message = `My name is ${this.name}. My surname is ${this.surname}. My email is ${this.email}. My message is ${this.message}`;
    //grab all the fields and their values
    alert(message)
  }  
}
