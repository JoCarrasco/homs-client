import { Component, Inject, inject } from '@angular/core';
import { AuthRedirectPageService } from './auth-redirect-page.service';
import { WINDOW } from '../../../constants/window.token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-redirect-page',
  imports: [],
  templateUrl: './auth-redirect-page.html',
  styleUrl: './auth-redirect-page.scss',
})
export class AuthRedirectPage {
  private readonly authRedirectPageService = inject(AuthRedirectPageService);
  private readonly router = inject(Router);
  private readonly window = inject(WINDOW);
  ngOnInit() {
    const params = this.authRedirectPageService.handleAuthRedirect(this.window);
    if (params === null) {
      // No auth params found; redirect to home or login page.
      this.router.navigate(['/']);
    } else {
      // Redirect to registration success page with token in query params.
      this.router.navigate([`/auth-success-signup`], { queryParams: { token: params.access_token } });
    }
  }
}
