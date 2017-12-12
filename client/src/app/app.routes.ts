import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { ConferencesSignupComponent } from './components/conferences-signup/conferences-signup.component';
import { ConferencesEditComponent } from './components/conferences-edit/conferences-edit.component';
import { ConferencesProfileComponent } from './components/conferences-profile/conferences-profile.component';
import { ConferencesGetComponent } from './components/conferences-get/conferences-get.component';

import { EventsGetComponent } from './components/events-get/events-get.component';
import { EventsSignupComponent } from './components/events-signup/events-signup.component';
import { EventsProfileComponent } from './components/events-profile/events-profile.component';


export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'profile',  component: UserProfileComponent },
  { path: 'user/:id/edit',  component: UserEditComponent },
  { path: 'conferences',  component: ConferencesGetComponent },
  { path: 'conferences/signup',  component: ConferencesSignupComponent },
  { path: 'conferences/:id/edit',  component: ConferencesEditComponent },
  { path: 'conferences/:id',  component: ConferencesProfileComponent },
  { path: 'events',  component: EventsGetComponent },
  { path: 'events/:idConference/signup',  component: EventsSignupComponent },
  { path: 'events/:id',  component: EventsProfileComponent }

];
