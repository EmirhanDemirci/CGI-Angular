import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

export interface Shift {
  name: string;
  skill: string;
  date: string;
}

@Component({
  selector: 'app-shift-page',
  templateUrl: './shift-page.component.html',
  styles: []
})
export class ShiftPageComponent implements OnInit {

  displayedColumns: string[] = ['name', 'skill', 'date', 'decision'];

  constructor(private http: HttpClient) { }

  dataSource = new Array(this.http.get('https://localhost:44357/api/Shift').subscribe(result => this.dataSource = result))

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  CallSweetalert() {
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
      } else {
        this.http.delete('https://localhost:44357/api/Shift')
      }
    })
  }
}