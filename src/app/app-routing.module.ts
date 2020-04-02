import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { DetailsComponent } from './profilepage/details/details.component';
import { ConnectionsComponent } from './profilepage/connections/connections.component';
import { PasswordforgetComponent } from './user/passwordforget/passwordforget.component';
import { RoosterPageComponent } from './rooster-page/rooster-page.component';

const routes: Routes = [

  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {
    path: 'user', component: UserComponent,
    children: [
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },
      { path: 'passwordforget', component: PasswordforgetComponent}
    ]
  },
  {path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
  {path: 'rooster-page', component:RoosterPageComponent},
  {path: 'profilepage', component: ProfilepageComponent,
    children: [
      { path: 'details', component: DetailsComponent },
      { path: 'connections', component: ConnectionsComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
