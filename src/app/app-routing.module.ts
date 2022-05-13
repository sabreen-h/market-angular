import { NgModule, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'logout' , component:LogoutComponent},
  {path:'cart', component:CartComponent},
  {path:'admin' ,component:GoodsComponent},
  {path:'signup' ,component:SignupComponent},
  {path:'**' , component:NotFoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
