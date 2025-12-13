import { Component } from '@angular/core';
import { AuthLoginCard } from './subcomponents/auth-login-card';

@Component({
  selector: 'app-auth-login',
  imports: [AuthLoginCard],
  templateUrl: './auth-login.html',
  styleUrl: './auth-login.scss',
})
export class AuthLogin {

}
