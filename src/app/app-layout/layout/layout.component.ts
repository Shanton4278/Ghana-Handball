import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [ RouterModule,NzDropDownModule],
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
