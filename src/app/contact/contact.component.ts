import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-info">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">Skontaktuj się z nami!</h1>
    </div>
    </div>
    </section>

    <section class="section">
    <div class="container">

      <!--Contact form -->
      <form (ngSubmit)="submitForm()" #contactForm="ngForm">
      
        <!-- Name -->
        <div class="field">
          <label class="label">Imię</label>
          <input 
            type="text" 
            name="name" 
            class="input" 
            [(ngModel)]="name"
            #nameInput="ngModel" 
            required>

          <div class="help is-error" *ngIf="nameInput.invalid && nameInput.touched">
            Twoje imię jest wymagane.
          </div>
        </div>

        <!-- Surname -->
        <div class="field">
          <label class="label">Nazwisko</label>
          <input 
            type="text" 
            name="surname" 
            class="input" 
            [(ngModel)]="surname"
            #surnameInput="ngModel"
            required>

          <div class="help is-error" *ngIf="surnameInput.invalid && surnameInput.touched">
            Twoje nazwisko jest wymagane.
          </div>  
        </div>

        <!-- Email -->
        <div class="field">
          <label class="label">E-mail</label>
          <input 
            type="email" 
            name="email" 
            class="input" 
            [(ngModel)]="email"
            #emailInput="ngModel"
            required
            email>

          <div class="help is-error" *ngIf="emailInput.invalid && emailInput.touched">
            Twój adres e-mail jest wymagany i musi być poprawnym adresem e-mail.
          </div>
        
        </div>

        <!-- Message -->
        <div class="field">
          <label class="label">Wiadomość</label>
          <textarea name="message" class="textarea" [(ngModel)]="message"></textarea>
        </div>

        <!-- Button -->
        <button 
          type="submit" 
          class="button is-large is-link is-rounded"
          [disabled]="contactForm.invalid">
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
    const message = `Nazywam się ${this.name}. Moje nazwisko to ${this.surname}. Mój email to ${this.email}. Moja wiadomość to ${this.message}`;
    //grab all the fields and their values
    alert(message)
  }  
}
