import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { RouterModule} from "@angular/router";

import {routes} from './app.routes';

import { authService } from '../services/auth.service';
import { conferencesService } from '../services/conferences.service';
import { eventsService } from '../services/events.service';
import { questionsService } from '../services/questions.service';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

import { ConferencesGetComponent } from './components/conferences-get/conferences-get.component';
import { ConferencesProfileComponent } from './components/conferences-profile/conferences-profile.component';
import { ConferencesSignupComponent } from './components/conferences-signup/conferences-signup.component';
import { ConferencesEditComponent } from './components/conferences-edit/conferences-edit.component';
import { EventsGetComponent } from './components/events-get/events-get.component';
import { EventsSignupComponent } from './components/events-signup/events-signup.component';
import { EventsProfileComponent } from './components/events-profile/events-profile.component';
import { QuestionsChatComponent } from './components/questions-chat/questions-chat.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';


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
    ConferencesGetComponent,
    EventsGetComponent,
    EventsSignupComponent,
    EventsProfileComponent,
    QuestionsChatComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [authService, conferencesService, eventsService, questionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
