import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ConirmComponent } from './confirmLogin/confirm.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';
import { RecaptchaModule } from "ng-recaptcha";

import { RouterModule, Routes } from '@angular/router';
import { RefreshComponent } from './refresh/refresh.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: ChangepwdComponent },
  { path: 'confirm-account', component: ConirmComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'change', component: ChangepwdComponent },
  { path: 'login/forget', component: ForgetComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConirmComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    ChangepwdComponent,
    ForgetComponent,
    ResetComponent,
    RefreshComponent
  ],
  imports: [ BrowserModule, FormsModule,RecaptchaModule,HttpClientModule, RouterModule.forRoot(routes, {
    //onSameUrlNavigation: 'ignore',
    onSameUrlNavigation: 'reload'
  }) ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { 

  ngOnInit(): void {
    setTimeout(function () { window.location.reload }, 1000);
  }
}
