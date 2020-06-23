import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  styleUrls: []
})

export class IncidentComponent implements OnInit {

  constructor(private modalService: NgbModal, public service: UserService, private toastr: ToastrService) { }

  incidentDetails;
  closeResult: string;
  model: NgbDateStruct;
  CardCreated: boolean = true;

  ngOnInit() : void {
    this.service.GetIncident().subscribe(
      res => {
        this.toastr.info("Getting all the incidents", "Incident")
        this.incidentDetails = res;
        console.log(this.incidentDetails);
      }
    )
  }

  formModel = {
    Title: '',
    Description: '',
    Email:['']
  }

  openPopup(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
  }
  
  SendEmail() {
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
