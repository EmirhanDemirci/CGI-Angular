import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { PasswordforgetComponent } from './user/passwordforget/passwordforget.component';
import { RoosterPageComponent } from './rooster-page/rooster-page.component';
import { ShiftPageComponent } from './shift-page/shift-page.component';
import { IsPlannerGuard } from './auth/is-planner.guard';

const routes: Routes = [

  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'passwordforget', component: PasswordforgetComponent}
    ]
  },
  {path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'rooster-page', component:RoosterPageComponent},
  {path: 'shift-page', component:ShiftPageComponent},
  {path: 'profilepage', component:ProfilepageComponent}
  //canActivate:[IsPlannerGuard] = only admins can enter the page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
