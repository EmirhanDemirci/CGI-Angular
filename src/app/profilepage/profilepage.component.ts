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
  imageUrl: string = "/assets/img/ProfilePage.png";
  Mytoken;
  fileToUpload: File = null;

  constructor(private router: Router,private service:UserService) { }
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

  handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
