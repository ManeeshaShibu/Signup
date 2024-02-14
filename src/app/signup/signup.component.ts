import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignUpComponent {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {
    this.name = '';
    this.phone = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  signUp() {
    // Your sign-up logic goes here
  }
}
