import { Component } from '@angular/core';
import {AF} from "../providers/af";
import {Router} from "@angular/router";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(public afService: AF, private router:Router) { }

  login() {
        this.afService.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((data) => {
            // Send them to homepage if they are logged in
            this.router.navigate(['']);
        })
  }

}
