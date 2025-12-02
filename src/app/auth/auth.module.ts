import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRedirectPage } from './pages/auth-redirect-page/auth-redirect-page';
import { AuthSuccessfullSignUp } from './pages/auth-successfull-sign-up/auth-successfull-sign-up';

const routes: Routes = [
    { path: '', redirectTo: 'auth-redirect', pathMatch: 'full' },
    { path: 'redirect', component: AuthRedirectPage },
    {
        path: 'success-signup',
        component: AuthSuccessfullSignUp
    }
];

@NgModule({
    declarations: [

    ],
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