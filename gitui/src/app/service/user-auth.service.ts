import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './../config';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http:HttpClient) { }

  authenticate_user(user_details){
    return this.http.post(config.apiBaseUrl+config["authPaths"]["auth"],user_details, this.httpOptions );
    //return this.http.get(config.apiBaseUrl+"/property-list/2" );
  }

  /*
  * @param sigin_details - json object of social login
  * @param medium- 1 - Google, 2- Facebooks
  */
  social_signin(signin_details, medium){
    return this.http.post(config.apiBaseUrl+config["authPaths"]["socialAuth"]+"/"+medium, signin_details, this.httpOptions);
  }

}
