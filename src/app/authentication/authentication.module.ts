import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { AuthenticationRoutingModule } from './authentication-routing.module';
// import { NzButtonModule } from 'ng-zorro-antd/button';
// import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
// import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
// import { NzInputModule } from 'ng-zorro-antd/input';
// import { NzInputOtpComponent } from 'ng-zorro-antd/input';
// import { NzTypographyComponent } from 'ng-zorro-antd/typography';

// import { SignInComponent } from './sign-in/sign-in.component';
// import { SignInComponent } from './sign-in/sign-in.component';
// import { SignInComponent } from './sign-in/sign-in.component';


@NgModule({
  declarations: [
    // SignInComponent
  ],
  imports: [CommonModule, AuthenticationRoutingModule],
})
export class AuthenticationModule {}
