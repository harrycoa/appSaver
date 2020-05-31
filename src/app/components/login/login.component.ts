import { Component, OnInit } from '@angular/core';
import { LoginModel } from './models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public model: LoginModel = new LoginModel();

  ngOnInit(): void {
  }

}
