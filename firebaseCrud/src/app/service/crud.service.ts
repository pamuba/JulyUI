import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireservice:AngularFirestore) { }

  create_NewEmployee(Record){
    return this.fireservice.collection('Employee').add(Record)
  }

  get_Allemployees(){
    return this.fireservice.collection('Employee').snapshotChanges()
  }
  update_employee(recordid, record){
    this.fireservice.doc('Employee/'+recordid).update(record)
  }
  delete_employee(record_id){
    this.fireservice.doc('Employee/'+record_id).delete();
  }
}
