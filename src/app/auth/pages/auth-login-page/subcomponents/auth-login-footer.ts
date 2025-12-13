import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-login-footer',
  imports: [],
  template: `
    <footer class="text-center text-sm text-slate-500">
        <p>New here? <a class="text-sky-500 hover:underline" href="#">Create an account</a></p>
    </footer>

  `,
  styles: `
    :host { display:block; }
  `
})
export class AuthLoginFooter {}
