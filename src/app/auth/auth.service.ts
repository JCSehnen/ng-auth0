import { Injectable } from '@angular/core';
import { AuthService as Auth0Service, LogoutOptions } from '@auth0/auth0-angular';

@Injectable()
export class AuthService {
  constructor(private auth: Auth0Service) {}

  login(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: window.location.origin } as Partial<LogoutOptions>);
  }

}
