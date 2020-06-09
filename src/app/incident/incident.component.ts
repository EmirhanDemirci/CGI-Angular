import { Component, ViewEncapsulation } from '@angular/core';
import {NgbModal, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../shared/user.service';



@Component({
  selector: 'app-incident',
  templateUrl: './incident.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: []
})
export class IncidentComponent {
  userDetails;
  closeResult: string;
  model: NgbDateStruct;
  CardCreated: boolean = true;

  constructor(private modalService: NgbModal, public service: UserService) {}
  
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
    this.service.SendEmail().subscribe;
  }

}
