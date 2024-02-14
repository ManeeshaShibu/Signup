import { Component } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginPageComponent {
  username: string = ''; 
  password: string = ''; 

  login() {
    // Your login logic here
    console.log("Login button clicked");
  }
}
