import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { registerModel } from '../../models/registration.model';
// import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-divisions',
  imports: [RouterModule,CommonModule],
  templateUrl: './divisions.component.html',
  styleUrl: './divisions.component.scss'
})
export class DivisionsComponent {

  constructor(private registrationService: RegistrationService){

  }
  ngOnInit(){
    
  }

  registerData!: registerModel;
  selectedDivision!: string;

  selectDivision(division: string) {
    this.selectedDivision = division;
    console.log("here is the division", this.selectedDivision)
}
}