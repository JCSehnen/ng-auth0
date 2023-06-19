import { NgModule } from '@angular/core';
import { AuthModule as Auth0Module } from '@auth0/auth0-angular';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    Auth0Module.forRoot({
      domain: 'YOUR_AUTH0_DOMAIN',
      clientId: 'YOUR_AUTH0_CLIENT_ID',
    }),
  ],
  providers: [AuthService],
})
export class AuthModule {}
