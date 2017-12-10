import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule} from "@angular/router";

import {routes} from './app.routes';

import { authService } from '../services/auth.service';
import { conferencesService } from '../services/conferences.service';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

import { ConferencesGetComponent } from './components/conferences-get/conferences-get.component';
import { ConferencesProfileComponent } from './components/conferences-profile/conferences-profile.component';
import { ConferencesSignupComponent } from './components/conferences-signup/conferences-signup.component';
import { ConferencesEditComponent } from './components/conferences-edit/conferences-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserProfileComponent,
    UserEditComponent,
    ConferencesSignupComponent,
    ConferencesProfileComponent,
    ConferencesEditComponent,
    ConferencesGetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [authService,conferencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
