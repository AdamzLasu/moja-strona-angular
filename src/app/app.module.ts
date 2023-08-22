import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CoreModule } from './core/core.module';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ListaComponent } from './lista/lista.component';

const firebaseConfig = {
  apiKey: "AIzaSyAA3UjGOVJSIK0cthNXd6I83qB1tSprVH8",
  authDomain: "moja-strona-angular.firebaseapp.com",
  databaseURL: "https://moja-strona-angular-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moja-strona-angular",
  storageBucket: "moja-strona-angular.appspot.com",
  messagingSenderId: "648147936025",
  appId: "1:648147936025:web:8a04effd4dfc374175db88",
  measurementId: "G-HT5F7PSRTD"
};



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    KontaktComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
