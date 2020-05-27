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
      title: 'Pay attention!',
      text: "Are you sure that you want to take over this shift?",
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Succeeded',
          'The shift has been taken over!',
          'success'
        )
      }
    })
  }
  DeleteDiv(){
    
  }
}
