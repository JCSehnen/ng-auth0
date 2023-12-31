import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  constructor() { }

  ngOnInit() {

  }

  login() {
    if (this.loginForm.valid) {
      // Lógica de autenticação
    }
  }

  loginWithFacebook() {
    // Lógica de login com Facebook
  }

  loginWithGoogle() {
    // Lógica de login com Google
  }
}
