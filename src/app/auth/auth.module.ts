import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRedirectPage } from './pages/auth-redirect-page/auth-redirect-page';
import { AuthSuccessfullSignUp } from './pages/auth-successfull-sign-up/auth-successfull-sign-up';
import { AuthLogin } from './pages/auth-login-page/auth-login';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: AuthLogin },
    { path: 'auth-redirect', component: AuthRedirectPage },
    {
        path: 'success-signup',
        component: AuthSuccessfullSignUp
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    providers: [

    ],
    exports: [
        RouterModule
    ]
})
export class AuthModule { }