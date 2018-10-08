import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
//import { UserSignSignupComponent } from './user-sign-signup/user-sign-signup.component';

const routes: Routes =[
  {
    path: 'web',
    component: HeaderComponent
  }/* ,{
    path: 'modal',
    component: UserSignSignupComponent
  } */
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
