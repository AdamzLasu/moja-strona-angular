import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private db: AngularFireDatabase) {}

  getEnquiry(postId: string, offset: number, startKey?: boolean):AngularFireList<any> {

    return this.db.list(`enquiry/${postId}`,ref => ref.orderByKey().startAt(startKey).limitToLast(offset+1));

    
  }
}




