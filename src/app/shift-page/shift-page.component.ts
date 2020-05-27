import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shift-page',
  templateUrl: './shift-page.component.html',
  styles: []
})
export class ShiftPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  CallSweetalert(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }

}
