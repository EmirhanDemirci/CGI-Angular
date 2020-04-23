import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html'
})
export class ProfilepageComponent implements OnInit {
  userDetails;
  constructor(private router: Router,private service:UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res =>{ 
        this.userDetails = res;
      },
      err =>{
        console.log(err);
      },
    );
  }

  onLogout(){
    // Delete the token (Logout)
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }

}