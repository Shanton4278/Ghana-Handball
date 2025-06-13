import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { NzButtonModule } from 'ng-zorro-antd/button';
import { SharedModule } from '../../shared/shared/shared.module';
// import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
// import { NzIconModule } from 'ng-zorro-antd/icon';
// import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sign-in',
   imports: [SharedModule,FormsModule,RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  constructor() {}  
  

  ngOnInit(): void {}

}
