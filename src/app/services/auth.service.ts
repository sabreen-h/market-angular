import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth) { }

  signup(email: any , passward: any){
    return this.afAuth.createUserWithEmailAndPassword(email, passward)
  }

  login(email:any, passward: any){
    return this.afAuth.signInWithEmailAndPassword( email , passward)
  }


  logout(){
    return this.afAuth.signOut()
  }
}
