import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { MatCardModule } from "@angular/material/card";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PasswordforgetComponent } from './user/passwordforget/passwordforget.component';
import { RoosterPageComponent } from './rooster-page/rooster-page.component';
import { ShiftPageComponent } from './shift-page/shift-page.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { AdduserComponent } from './adduser/adduser.component';
import { ManageuserComponent } from './manageuser/manageuser.component';
import { IncidentComponent } from './incident/incident.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ProfilepageComponent,
    PasswordforgetComponent,
    RoosterPageComponent,
    ShiftPageComponent,
    IncidentComponent,
    AdduserComponent,
    ManageuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule,
    MatCardModule
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
