import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from '@angular/forms';
import { title } from 'process';
import { CalendarValues } from 'src/models/calendar';

@Component({
  selector: 'app-rooster-page',
  templateUrl: './rooster-page.component.html',
  styles: []
})
export class RoosterPageComponent{
  Calendar: CalendarValues = new CalendarValues();
  constructor(public service: UserService, private toastr: ToastrService, private fb: FormBuilder) { }

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [];

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }

  handleDateClick(arg) {
    this.Calendar.date = arg.dateStr;
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'new task',
        start: arg.date,
        allDay: arg.allDay
      })
      console.log(this.calendarEvents);
      this.service.registerDate().subscribe(
        (res: any) => {
          if (res.status == 200) {
            this.service.formModel.reset();
            this.toastr.success('New user created', 'Registration successful');
          }
        },
        err => {
          this.toastr.error(err.error.message, 'Date registration failed');
          console.log(err);
        }
      )
    }
  }

  onSubmit() {
    
  }
}

