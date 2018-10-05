import { Component, OnInit } from '@angular/core';
import { UserSignSignupComponent  } from "./../user-sign-signup/user-sign-signup.component" 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  matDialog:MatDialog;
  obj = new UserSignSignupComponent(this.matDialog);
  constructor() { }

  ngOnInit() {
  }

  signin(){
    
    this.obj.openDialog();
  }

}
