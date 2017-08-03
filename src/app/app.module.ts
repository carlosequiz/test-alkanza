import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "./providers/af";
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ImgService } from './providers/img.service';

// Must export config
export const firebaseConfig = {
    apiKey: "AIzaSyAH1aoqu3zHDamdd5zRG5aXaRRBlclfAkY",
    authDomain: "test-alkanza.firebaseapp.com",
    databaseURL: "https://test-alkanza.firebaseio.com",
    projectId: "test-alkanza",
    storageBucket: "test-alkanza.appspot.com",
    messagingSenderId: "871541808001"
};

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'login', component: LoginPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AF,ImgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
