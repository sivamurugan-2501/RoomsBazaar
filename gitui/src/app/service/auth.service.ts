import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from './../config';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) { }

  authenticate_user(userDetails){
    return this.http.post(config.apiBaseUrl+config["authPaths"]["auth"],userDetails);
  }

}
