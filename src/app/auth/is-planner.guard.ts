import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//jwt
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class IsPlannerGuard implements CanActivate {

  constructor(private router: Router) {
  }
   Mytoken;

   //Checkt in de JWT of het een gebruiker of planner is.
    canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      var num = new Number(1);
      var myToken = localStorage.getItem("token");
      const jwtHelper = new JwtHelperService();
      const output = jwtHelper.decodeToken(myToken);
      this.Mytoken = output.Planner;
      var number = this.Mytoken;
      console.log(this.Mytoken);
  
        if(this.Mytoken == num)
        return true
        else{
          this.router.navigate(['rooster-page'])
          return false
        }
    }
}
