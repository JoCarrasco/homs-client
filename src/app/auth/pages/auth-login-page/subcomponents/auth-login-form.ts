import { Component, inject, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface AuthLoginFormContents {
    email: string;
    password: string;
}

@Component({
    selector: 'app-auth-login-form',
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './auth-login-form.html',
    styles: `
        :host { display:block; }
    `
})
export class AuthLoginForm {
    private readonly fb = inject(FormBuilder);
    protected form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
    
    protected readonly submited = output<AuthLoginFormContents>();

    get email() { return this.form.get('email'); }
    get password() { return this.form.get('password'); }

    onSubmit() {
        console.log(this.form);
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.submited.emit(this.form.value as AuthLoginFormContents);
    }
}
