import { Injectable } from '@angular/core';
import { LoginModel } from '../components/login/models/login.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdentityService {

  constructor(private http: HttpClient) { }

  signIn(model: LoginModel): Observable<any> {
    return this.http.post('http://localhost:3000/sign-in', model);
  }
}
