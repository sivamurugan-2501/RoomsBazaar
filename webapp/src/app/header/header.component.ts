import { Component, OnInit } from '@angular/core';
import { UserSignSignupDialog  } from "./../user-sign-signup/user-sign-signup.component" ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //matDialog:MatDialog;
  //obj = new UserSignSignupComponent(this.matDialog);
  
  //modalService:NgbModal;
  
  constructor(public dialog: MatDialog, private modalService: NgbModal,private socialAuthService: AuthService) { }
  

  ngOnInit() {
  }

  signin(){
    let signInModal = new UserSignSignupDialog(this.modalService,this.socialAuthService);
    signInModal.open(); 
  }

}

/*
@Component({
  selector: 'app-user-sign-signup',
})
export class UserSignSignupComponent {
  public dialog:MatDialog;
  constructor(public dialog1: MatDialog) {}
}*/