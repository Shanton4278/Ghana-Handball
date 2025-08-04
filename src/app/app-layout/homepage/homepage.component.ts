import { Component,  OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzSpinModule } from 'ng-zorro-antd/spin';
// import {NgIf} from '@angular/common';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-homepage',
  imports: [RouterModule,NzSpinModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [  // void => *
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [  // * => void
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class HomepageComponent {

  
}
