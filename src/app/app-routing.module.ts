import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ConirmComponent } from './confirmLogin/confirm.component';
import { ForgetComponent } from './forget/forget.component';
import { ResetComponent } from './reset/reset.component';

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
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 

}
