import {Injectable} from "@angular/core";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AF {
    public images: FirebaseListObservable<any>;
    public users: FirebaseListObservable<any>;
    public displayName: string;
    public email: string;

    constructor(public db: AngularFireDatabase, public afAuth: AngularFireAuth) {
        this.images = this.db.list('images');
    }

    loginWithGoogle() {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    /**
    * Logs out the current user
    */
    logout() {
        return this.afAuth.auth.signOut();
    }
    /**
    * Saves a user's selected image to the Firebase Realtime Database
    * @param url
    */
    saveImage(url) {
        var image = {
          url: url,
          displayName: this.displayName,
          email: this.email,
          timestamp: Date.now()
        };
        this.images.push(image);
    }

}