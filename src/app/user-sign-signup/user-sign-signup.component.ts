import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
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
  constructor(public activeModal: NgbActiveModal, private socialAuthService: AuthService) {}

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
}

@Component({
  selector: 'app-user-sign-signup-dialog',
  templateUrl: 'user-sign-signup.component.html',
  styles: ['./user-sign-signup.component.css']
})
export class UserSignSignupDialog{
  constructor(private modalService: NgbModal, private socialAuthService: AuthService ) {}

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
