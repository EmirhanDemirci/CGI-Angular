import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
userDetails;
  constructor(private router: Router,private service:UserService) { }

  ngOnInit() {
    this.userDetails = this.service.getUserProfile();
  }

  onLogout(){
    // Delete the token (Logout)
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/user/login'])
  }

}
