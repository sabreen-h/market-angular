import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fs:AngularFirestore) { }
  getAllGoods(){
    return this.fs.collection('goods').snapshotChanges()
  }
}
