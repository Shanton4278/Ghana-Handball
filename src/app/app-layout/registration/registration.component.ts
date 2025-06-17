import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

@Component({
  selector: 'app-registration',
  imports: [RouterModule,NzFormModule, FormsModule,NzCheckboxModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

}
