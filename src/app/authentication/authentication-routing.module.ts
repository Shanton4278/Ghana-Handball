import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { OTPComponent } from './otp/otp.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

const routes: Routes = [
  // {path:'',pathMatch:'full', redirectTo:'signin'},
  // {path:'signin', component:SignInComponent},
  // {path:'otp',component:OTPComponent},
  // {path:'forgotpassword',component:ForgotpasswordComponent},
  // {path:'resetpassword',component:ResetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
