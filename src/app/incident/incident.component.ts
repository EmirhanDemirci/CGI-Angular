import { Component, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: []
})

export class IncidentComponent {
  constructor(private modalService: NgbModal, public service: UserService, private toastr: ToastrService) {}

  userDetails;
  closeResult: string;
  model: NgbDateStruct;
  CardCreated: boolean = true;

  
  formModel = {
    Title: '',
    Description: '',
    Email:['']
  }

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

  openPopup(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  
  SendEmail()
  {
    this.CardCreated = !this.CardCreated;
  }
  onSubmit(form: NgForm) {
    this.service.PostIncident(form.value).subscribe(
      (res: any) => {
        this.toastr.success('New incident created', 'Incident successful');
      }
    )
  }
}
