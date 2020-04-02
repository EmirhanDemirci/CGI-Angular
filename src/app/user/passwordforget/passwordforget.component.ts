import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-passwordforget',
  templateUrl: './passwordforget.component.html',
  styleUrls: []
})
export class PasswordforgetComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService ) {}

  ngOnInit(): void {
    this.service.formModel.reset();
  }
  // onSubmit() {
  //   this.service.register().subscribe(
  //     (res: any) => {
  //       if (res.succeeded) {
  //         this.service.formModel.reset();
  //         this.toastr.success('New user created', 'Registration successful');
  //       } else {
  //         res.errors.forEach(element => {
  //           switch (element.code) {
  //             case 'DuplicateUserName':
  //               // Username is already taken
  //               this.toastr.error('Username is already taken', 'Registration failed');
  //               break;

  //             default:
  //               // Registration is failed.
  //               this.toastr.error(element.description, 'Registration failed');
  //               break;
  //           }
  //         });
  //       }
  //     },
  //     err => {
  //       console.log(err);
  //     }
  //   );
  // }
}
