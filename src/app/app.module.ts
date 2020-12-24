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
    ResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
