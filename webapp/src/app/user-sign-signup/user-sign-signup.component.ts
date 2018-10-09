import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


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
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-user-sign-signup-dialog',
  templateUrl: 'user-sign-signup.component.html',
  styles: ['./user-sign-signup.component.css']
})
export class UserSignSignupDialog{
  constructor(private modalService: NgbModal) {}

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
