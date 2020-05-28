import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient, private authService: AuthService) { }
  readonly BaseURI = 'http://fdemirci.nl:7575/api';
  // readonly LocalUriDocker = 'http://localhost:7575/api';
  // readonly LocalURI = 'https://localhost:44357/api'

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FirstName: ['', Validators.required],
    LastName: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  formModel2 = this.fb.group({
    Email: ['', Validators.email],
  });


  comparePasswords(fb: FormGroup) {
    const confirmPasswordCtrl = fb.get('ConfirmPassword');
    if (confirmPasswordCtrl.errors == null || 'passwordMismatch' in confirmPasswordCtrl.errors) {
      if (fb.get('Password').value !== confirmPasswordCtrl.value) {
        confirmPasswordCtrl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordCtrl.setErrors(null);
      }
    }
  }

  register() {
    const body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FirstName: this.formModel.value.FirstName,
      Lastname: this.formModel.value.LastName,
      Password: this.formModel.value.Passwords.Password,
    };
    return this.http.post(this.BaseURI + '/User/Register', body, { observe: 'response'});
  }

  login(formData){
    return this.http.post(this.BaseURI + '/User/Login', formData);
  }
  
  getUserProfile(){
    return JSON.parse(localStorage.getItem('user'));
  }
  //Posting a profile image (Not working yet)
  postFile(fileToUpload){
    var userId = this.authService.GetUser().id;
    const formData: FormData = new FormData();
    formData.append('fileToUpload', fileToUpload, fileToUpload.name)
    return this.http.post(`${this.BaseURI}/File/upload/${userId}`, formData)
  }
}
