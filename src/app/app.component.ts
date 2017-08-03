import { Component } from '@angular/core';
import { AF } from "./providers/af";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public isLoggedIn: boolean;

    constructor(public afService: AF, private router: Router) {
        this.afService.afAuth.authState.subscribe(
            (auth) => {
                if (auth == null) {
                    console.log("Not logged in.");
                    this.router.navigate(['login']);
                    this.isLoggedIn = false;
                }
                else {
                    console.log("Successfully Logged in.");
                    // Set the Display Name and Email so we can attribute messages to them
                    this.afService.displayName = auth.providerData[0].displayName;
                    this.afService.email = auth.providerData[0].email;
                    this.isLoggedIn = true;
                    //Without it when a user is logged in and goes directly to /login
                    // the user did not get redirected to the home page.
                    this.router.navigate(['']);
                }
            }
        );
    }

    logout() {
        this.afService.afAuth.auth.signOut();
    }
}
