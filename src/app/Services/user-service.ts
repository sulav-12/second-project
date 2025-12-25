import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private firestore = inject(Firestore);

  getUsers(): Observable<any[]> {
    const ref = collection(this.firestore, 'users');
    return collectionData(ref, { idField: 'id' });
  }

  updateUser(id: string, data: any) {
    const ref = doc(this.firestore, 'users', id);
    return updateDoc(ref, data);
  }

  deleteUser(id: string) {
    const ref = doc(this.firestore, 'users', id);
    return deleteDoc(ref);
  }
}
