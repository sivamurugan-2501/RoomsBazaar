import { Component, OnInit } from '@angular/core';
import { UserSignSignupDialog  } from "./../user-sign-signup/user-sign-signup.component" ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  matDialog:MatDialog;
  obj = new UserSignSignupComponent(this.matDialog);
  constructor(public dialog: MatDialog) { }
  animal: string;
  name: string;
  loginPopopWidth :75;

  ngOnInit() {
  }

  signin(){
    this.openDialog();
  }

  openDialog(): void {
    console.log(this.dialog);
    const dialogRef = this.dialog.open(UserSignSignupDialog, {
      width: this.loginPopopWidth+"%",
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}


@Component({
  selector: 'app-user-sign-signup',
})
export class UserSignSignupComponent {

  
  public dialog:MatDialog;
  constructor(public dialog1: MatDialog) {}

  
}