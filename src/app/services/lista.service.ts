import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  constructor(private db: AngularFirestore) { }


  getAllUsers() {
    return new Promise<any>((resolve)=> {
      this.db.collection('enquiry').valueChanges({ idField: 'name' }).subscribe(users => resolve(users));
    })
  }


}

