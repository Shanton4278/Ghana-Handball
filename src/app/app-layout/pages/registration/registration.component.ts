import { Component } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [NzFormModule,FormsModule,NzCheckboxModule,RouterModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

}
