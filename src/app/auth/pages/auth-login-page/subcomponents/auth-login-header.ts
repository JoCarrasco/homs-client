import { Component } from '@angular/core';

@Component({
    selector: 'app-auth-login-header',
    imports: [],
    template: `
    <header class="text-center">
        <div class="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-b from-slate-100 to-white border border-slate-200 shadow-inner mb-4">
            <span class="text-2xl font-semibold text-slate-700">H</span>
        </div>
        <h1 class="text-2xl font-semibold text-slate-800">Welcome back</h1>
        <p class="text-sm text-slate-500 mt-1">Sign in to continue to HOMS</p>
    </header>
    `,
    styles: `
        :host { display:block; }
    `
})
export class AuthLoginHeader { }
