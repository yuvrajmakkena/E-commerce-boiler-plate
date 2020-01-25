import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from "@angular/fire/auth";
import * as firebase from "firebase";
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private login:AngularFireAuth) { 
    this.login.authState.subscribe(user=>console.log(user))
  }
   loginwithGoogle(){
      return this.login.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());

   }
   logoutwihGoogle(){
     return this.login.auth.signOut();
   }
}
