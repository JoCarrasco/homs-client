import { Component } from '@angular/core';
import { AuthLoginHeader } from './auth-login-header';
import { AuthLoginFooter } from './auth-login-footer';
import { AuthLoginForm } from './auth-login-form';

@Component({
    selector: 'app-auth-login-card',
    imports: [AuthLoginHeader, AuthLoginForm, AuthLoginFooter],
    template: `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 p-6">
        <div class="w-full max-w-md">
            <div class="bg-white/75 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-2xl p-8 space-y-6">
                <app-auth-login-header></app-auth-login-header>
                <app-auth-login-form></app-auth-login-form>
                <app-auth-login-footer></app-auth-login-footer>
            </div>
        </div>
    </div>
  `,
    styles: `
        :host { display: block; }
    `
})
export class AuthLoginCard { }
