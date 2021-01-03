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
export class UserService {

  constructor(private http: HttpClient) { }

  register(user): Observable<any> {
    return this.http.post(AppConstants.API_URL + 'signup', {
      name: user.name,
      email: user.email,
      password: user.password,
      matchingPassword: user.matchingPassword,
      socialProvider: 'LOCAL'
    }, httpOptions);
  }

  confirm(token): Observable<any> {
    return this.http.get(AppConstants.API_URL + 'confirm-account?confirm-token='+token, {
  });
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

  getCurrentUser(): Observable<any> {
    return this.http.get(AppConstants.API_URL + 'user/me', httpOptions);
  }


  getPublicContent(): Observable<any> {
    return this.http.get(AppConstants.API_URL + 'all', { responseType: 'text' });
  }


}
