import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//jwt
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class IsPlannerGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) {
  }
   Mytoken;

  //Checkt in de JWT of het een gebruiker of planner is.
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.IsPlanner())
    {
      this.router.navigate(['rooster-page'])
      return false;
    }
    return true;
  }
}
