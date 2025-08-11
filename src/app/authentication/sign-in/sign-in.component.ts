import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { AuthenticationService } from '../../services/authentication.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { signInModel } from '../../models/authentication.model';

@Component({
  selector: 'app-sign-in',
  imports: [RouterModule,FormsModule,NzButtonModule,NzFormModule,NzInputModule,NzCheckboxModule,
    NzSpinModule,NgIf,CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  constructor(private router:Router, private authService:AuthenticationService,private notification:NzNotificationService){
   this.signInData = new signInModel()
  }
  createNotification(position: 'top', type: 'success'| 'info'| 'warning'| 'error', title: string, message: string ){
    this.notification.create(type, title, message, {nzPlacement: position, nzDuration: 4000});
  }
  showPassword = false;
  isLoading = false;

  signInData!: signInModel
  submit(item:NgForm){
    this.isLoading = true;
    this.authService.signin(this.signInData).subscribe({
      next: (response) => {
        console.log("signed in", response)
        localStorage.setItem('token',response.token)
        localStorage.setItem('user', JSON.stringify(response));
        this.createNotification('top', "success", "Login Successful!!", "Welcome Back!");
        this.isLoading = false;
        this.router.navigate(['auth/all'])
      },
      error: (error) => {
        console.log("sign in eror", error)
        if (error.status === 0){
          this.createNotification("top", "error", "No internet connection", "Please check your internet connection and try again!")
         }else (error.status === 404 || error.status === 400);{
           this.createNotification("top", "error", "Invalid credentials", "Kindly check your email and password and try again!")
         }
         this.isLoading = false;
      },
      complete: () =>{

      }
    })
  }
}
