import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { Router,RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [NzDropDownModule,RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

//   isMenuOpen = false;

// toggleMenu() {
//   this.isMenuOpen = !this.isMenuOpen;
// }

}
