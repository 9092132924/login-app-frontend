import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../common/app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signin', {
      email: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user): Observable<any> {
    return this.http.post(AppConstants.AUTH_API + 'signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }

  forget(user): Observable<any> {
    return this.http.post(AppConstants.API_URL + 'forgot', {
      email: user.username,
    }, httpOptions);
  }

  reset(user,token): Observable<any> {
    return this.http.post(AppConstants.API_URL + 'reset?confirm-token='+token, {
      password: user.password,
      matchingPassword: user.matchingPassword,
    }, httpOptions);
  }
  change(user,form): Observable<any> {
    return this.http.post(AppConstants.API_URL + 'change', {
      password: form.password,
      matchingPassword: form.matchingPassword,
      email: user.username
    }, httpOptions);
  }


  confirm(token): Observable<any> {
    return this.http.get(AppConstants.AUTH_API + 'confirm-account?confirm-token='+token, {
  });

  
}


}
