import { Component, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput, Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { UserService } from '../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { title } from 'process';
import { CalendarValues } from 'src/models/calendar';

@Component({
  selector: 'app-rooster-page',
  templateUrl: './rooster-page.component.html',
  styles: []
})
export class RoosterPageComponent {
  Calendar: CalendarValues = new CalendarValues();
 

  arg: any;
  constructor(public service: UserService, private toastr: ToastrService, private fb: FormBuilder) {
    this.calenderForm = this.fb.group({
      title: ['', Validators.required],
      date: []
    });
  }

  ngOnInit() {
    this.service.GetSchedule().subscribe(
      (res: any) => {
        if (res !== null) {
          this.calendarEvents = res;
        }
      },
      err => {
        console.log(err);
      }
    )
  }

  calenderForm: FormGroup;

  @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template
  calendarEvents: EventInput[] = [];
  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  selectable = true;


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
    this.arg = arg;
    console.log(arg);
    this.calenderForm = this.fb.group({
      title: ['', Validators.required],
      date: [arg.date]
    });
  }

  onSubmit() {
    this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
      title: this.calenderForm.value.title,
      start: this.arg.date,
      allDay: this.arg.allDay
    })
    console.log(this.calendarEvents);
    console.log(this.calenderForm.value);
    this.service.registerDate(this.calenderForm.value).subscribe(
      (res: any) => {
        if (res.status == 200) {
          this.service.formModel.reset();
          this.toastr.success('New Date created', 'Date successful');
        }
      },
      err => {
        this.toastr.error(err.error.message, 'Date registration failed');
        console.log(err);
      }
    )
  }
}

