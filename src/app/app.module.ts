import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes  } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot([
		{ path: '', redirectTo: 'login', pathMatch: 'full'},
		{ path: 'login', component: LoginComponent },
		{ path: 'profile', component: ProfileComponent },
		{ path: '**', redirectTo: 'login' }
	])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
