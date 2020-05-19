import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
//jwt
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html'
})
export class ProfilepageComponent implements OnInit {
  userDetails;
  constructor(private router: Router,private service:UserService) { }
  Mytoken;
  ngOnInit() {
    var profile = this.service.getUserProfile()
    console.log(profile);
    this.userDetails = profile;
  }

  onLogout(){
    // Delete the token (Logout)
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }

}
