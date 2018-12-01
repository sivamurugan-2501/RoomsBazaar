import { Component, Inject } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginUser } from './../skeleton/login-user';
import { Router } from '@angular/router';
// Custom service to authenticate users
import { UserAuthService } from './../service/user-auth.service';

import {
  // Angular plugin for google, fb etc authenticaition
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-user-sign-signup',
  templateUrl: './user-sign-signup.component.html',
  styleUrls: ['./user-sign-signup.component.css']
})
export class UserSignSignupComponent {
  user_details:LoginUser = {
    username: null,
    password: null,
    client_url: null
  };  
  constructor(public activeModal: NgbActiveModal, private socialAuthService: AuthService, private route: Router, private userAuth: UserAuthService) {}

  socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        alert(userData);
        console.log(socialPlatform+" sign in data : " , userData);
      }
    );
  }

  sign_in(){
    this.user_details.client_url = this.route.url;
    this.userAuth.authenticate_user(this.user_details).subscribe(response =>{
        console.log("Response : ");
        console.log(response);
    });
    
  }
}

@Component({
  selector: 'app-user-sign-signup-dialog',
  templateUrl: 'user-sign-signup.component.html',
  styles: ['./user-sign-signup.component.css']
})
export class UserSignSignupDialog{
  constructor(private modalService: NgbModal, private socialAuthService: AuthService, private route: Router ) {}

  user_details:LoginUser = {
    username: null,
    password: null,
    client_url: null
  };  

  

  open() {
    const modalRef = this.modalService.open(UserSignSignupComponent);
    //modalRef.componentInstance.name = 'World';
  }

  

  
}

/*export class UserSignSignupDialog {

  constructor(
    public dialogRef: MatDialogRef<UserSignSignupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}*/
