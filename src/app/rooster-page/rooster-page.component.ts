import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';


  @Component({
  selector: 'app-rooster-page',
  templateUrl: './rooster-page.component.html',
  styles: []
  
})

export class RoosterPageComponent{
  title = 'calendar-project';
  calendarPlugin = [dayGridPlugin]
}