import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../src/app/shared/user.service';
import { AuthService } from './auth/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetails;
  isPlanner;
  constructor(public router: Router,private service:UserService, private authService: AuthService) { }
  title = 'CGI-Angular';

  ngOnInit() {
   this.isPlanner = this.authService.IsPlanner();
  }
  onLogout(){
    // Delete the token (Logout)
    localStorage.removeItem('token');
    this.router.navigate(['/user/login'])
  }
}
