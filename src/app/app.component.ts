import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../src/app/shared/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetails;
  constructor(public router: Router,private service:UserService) { }
  title = 'CGI-Angular';

  ngOnInit() {
    // this.service.getUserProfile().subscribe(
    //   res =>{ 
    //     this.userDetails = res;
    //   },
    //   err =>{
    //     console.log(err);
    //   },
    // );
  }
  onLogout(){
    // Delete the token (Logout)
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }
}
