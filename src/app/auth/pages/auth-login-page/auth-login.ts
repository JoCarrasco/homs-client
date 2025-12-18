import { Component } from '@angular/core';
import { AuthLoginCard } from './subcomponents/auth-login-card';
import { AuthLoginFormContents } from './subcomponents/auth-login-form';

@Component({
  selector: 'app-auth-login',
  imports: [AuthLoginCard],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.scss',
})
export class AuthLogin {
  handleLogin(value: AuthLoginFormContents) {
    console.log('Login form submitted', value);
  }
}
