import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: []
})

  export class KontaktComponent implements OnInit{
    myForm: FormGroup; 
    isSubmit = true;
    SubmitMessage = ''; 
  
    private contactForm: AngularFirestoreCollection<any>;
    
  

    constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
      
    }

  
  
    ngOnInit() {
      this.contactForm = this.firestore.collection('enquiry', (ref)=>ref.orderBy('timestamp','desc'));
      //this.contact = this.contactForm.valueChanges();

      this.myForm = this.fb.group({
        name: ['', Validators.required],
        surname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        message: ['', [Validators.required, Validators.minLength(15)]],
        });
    }
            //form: FormGroup
    onSubmit(value:any) {

        this.contactForm.add(value)
        .then(res=>{
          this.SubmitMessage = 'Przesłano pomyślnie';
          setTimeout(()=>{
            this.isSubmit=false;
          },8000);
        })
          .catch(err=>{
            console.log(err);
          });
        
      //console.log('Valid?', form.valid); // true or false
      //console.log('Name', form.value.name);
      //console.log('Surname', form.value.surname);
      //console.log('Email', form.value.email);
      //console.log('Message', form.value.message);
      //this.httpClient.post("https://moja-strona-angular-default-rtdb.europe-west1.firebasedatabase.app/", form.value.myForm).subscribe()
  }
}
