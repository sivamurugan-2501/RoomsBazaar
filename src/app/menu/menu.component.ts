import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular5-social-login';
import { UserSignSignupDialog  } from "./../user-sign-signup/user-sign-signup.component" ;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private modalService: NgbModal,private socialAuthService: AuthService) { }

  ngOnInit() {
  }

  signin(){
    let signInModal = new UserSignSignupDialog(this.modalService,this.socialAuthService);
    signInModal.open(); 
  }

}
