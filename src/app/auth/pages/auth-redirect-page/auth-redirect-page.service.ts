import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface AuthRedirectParams {
    access_token: string;
    refresh_token: string;
    expires_in: string;
    token_type: string;
    type: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthRedirectPageService {

    constructor(private http: HttpClient) { }

    handleAuthRedirect(window: Window): AuthRedirectParams | null {
        const params = this.parseAuthHash(window.location.hash);
        if (params) {
            // Send tokens to backend to be stored in a HttpOnly cookie.
            // HttpOnly cookies cannot be created from client-side JS; the backend must set them.
            // This POST will allow the backend to set an HttpOnly cookie and return a safe response.
            this.safelyCreateHttpOnlyCookie(params);
            return params;
        }
        return null;
    }

    /**
     * Parses the hash fragment from the URL to extract authentication parameters.
     * @param hash The window.location.hash string (e.g., "#access_token=...")
     * @returns An object containing the parsed parameters or null if parsing fails.
     */
    private parseAuthHash(hash: string): AuthRedirectParams | null {
        if (!hash || !hash.startsWith('#')) {
            return null;
        }

        // Remove the leading '#'
        const queryString = hash.substring(1);
        const params = new URLSearchParams(queryString);

        const accessToken = params.get('access_token');
        const refreshToken = params.get('refresh_token');
        const expiresIn = params.get('expires_in');
        const tokenType = params.get('token_type');
        const type = params.get('type');

        if (accessToken && type === 'signup') {
            return {
                access_token: accessToken,
                refresh_token: refreshToken || '',
                expires_in: expiresIn || '',
                token_type: tokenType || '',
                type: type
            };
        }

        return null;
    }

    /**
     * Checks if the parsed parameters indicate a successful registration.
     * @param params The parsed auth parameters.
     */
    isSuccessfulRegistration(params: AuthRedirectParams): boolean {
        return !!params && !!params.access_token && params.type === 'signup';
    }

    private safelyCreateHttpOnlyCookie(params: AuthRedirectParams) {
        this.http.post('/auth/store-tokens', {
            access_token: params.access_token,
            refresh_token: params.refresh_token,
            expires_in: params.expires_in,
            token_type: params.token_type
        }).pipe(
            catchError(error => {
                console.error('Error storing authentication session details:', error);
                return of(null);
            })
        ).subscribe();
    }
}