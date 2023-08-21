import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: []
})

  export class KontaktComponent implements OnInit{
    myForm: FormGroup;  
  
    constructor(private fb: FormBuilder, private httpClient: HttpClient) {
      this.myForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(15)]],
      });
    }

  
  
    ngOnInit() {
      
    }
  
    onSubmit(form: FormGroup) {
      console.log('Valid?', form.valid); // true or false
      console.log('Name', form.value.name);
      console.log('Surname', form.value.surname);
      console.log('Email', form.value.email);
      console.log('Message', form.value.message);
      this.httpClient.post("https://moja-strona-angular-default-rtdb.europe-west1.firebasedatabase.app/", form.value.name)
    }
  }
