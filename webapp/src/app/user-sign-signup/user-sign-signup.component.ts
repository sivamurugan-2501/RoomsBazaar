import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatInput} from '@angular/material';


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

  animal: string;
  name: string;
  public dialog:MatDialog;
  constructor(public dialog1: MatDialog) {}

  openDialog(): void {
    console.log(this.dialog);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}

@Component({
  selector: 'app-user-sign-signup-dialog',
  templateUrl: 'user-sign-signup.component.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
