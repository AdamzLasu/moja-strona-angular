import { HttpClient } from "@angular/common/http";
import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: "app-kontakt",
  templateUrl: "./kontakt.component.html",
  styleUrls: [],
})

export class KontaktComponent implements OnInit {
  myForm: FormGroup;
  isSubmit = true;
  SubmitMessage = "";

  enquiryy$: Observable<any[]>;

  //icon
  faEnvelope = faEnvelope;
  faList = faList;

  //pagination



  private contactForm: AngularFirestoreCollection<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private fb: FormBuilder, private firestore: AngularFirestore) {
    this.contactForm = this.firestore.collection('enquiry', (ref) => ref.orderBy('timestamp', 'desc')); 
    this.enquiryy$ = this.contactForm.valueChanges({});
    this.paginator = this.paginator;

    this.myForm = this.fb.group({
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.minLength(15)]],
    });
    
  }



  ngOnInit() {

  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      formData.timestamp = new Date();
      this.contactForm.add(formData)
        .then(() => {
          this.SubmitMessage = 'Przesłano pomyślnie';
          this.isSubmit = true;
          setTimeout(() => {
            this.isSubmit = false;
          }, 8000);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

}
//   //form: FormGroup
//  // onSubmit(value: any) {
//    // this.contactForm
//      // .add(value)
//       //.then((res) => {
//       //  this.SubmitMessage = "Przesłano pomyślnie";
//        // setTimeout(() => {
//           this.isSubmit = false;
//         }, 8000);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

    //console.log('Valid?', form.valid); // true or false
    //console.log('Name', form.value.name);
    //console.log('Surname', form.value.surname);
    //console.log('Email', form.value.email);
    //console.log('Message', form.value.message);
    //this.httpClient.post("https://moja-strona-angular-default-rtdb.europe-west1.firebasedatabase.app/", form.value.myForm).subscribe()

  