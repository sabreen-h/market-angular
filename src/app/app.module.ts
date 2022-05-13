import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule, SETTINGS} from '@angular/fire/compat/firestore';
import{AngularFireAuthModule} from '@angular/fire/compat/auth';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CartComponent,
    GoodsComponent,
    NotFoundComponent,
    NavComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
   
   

    FormsModule ,
    AngularFireModule.initializeApp({apiKey: "AIzaSyDMM6DcYFaKMzD5zpfebS6twkvlUa-Mxek",
    authDomain: "market-639ef.firebaseapp.com",
    projectId: "market-639ef",
    storageBucket: "market-639ef.appspot.com",
    messagingSenderId: "59118911999",
    appId: "1:59118911999:web:735e6b305e09bea3a5e7ca",
    measurementId: "G-4MD57EZZE1"

    })

  ],
  providers: [{
    provide:SETTINGS,useValue:{}
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
