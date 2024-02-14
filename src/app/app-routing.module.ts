import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login.component';
import { SignUpComponent } from './signup/signup.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'signUp',
    component:SignUpComponent
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
