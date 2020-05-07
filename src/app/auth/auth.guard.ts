import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//jwt
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

constructor(private router: Router) {
}
 Mytoken;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(localStorage.getItem('token')!=null)
    return true;
    else{
    this.router.navigate(['/user/login'])
      return false
    }
  }
}
