import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  IsPlanner(): boolean {
    var token = localStorage.getItem("token");
    const jwtHelper = new JwtHelperService();
    const decodedToken = jwtHelper.decodeToken(token);

    if (decodedToken.Planner == 1) {
      return true;
    }
    else {
      return false;
    }
  }

  GetUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  
}
