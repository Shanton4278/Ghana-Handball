import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { registerModel } from '../../models/registration.model';

@Component({
  selector: 'app-divisions',
  imports: [RouterModule],
  templateUrl: './divisions.component.html',
  styleUrl: './divisions.component.scss'
})
export class DivisionsComponent {

  constructor(private registrationService: RegistrationService){

  }
  ngOnInit(){
    this.updatePayload();
  }

  registerData!: registerModel;
  
  // In your component.ts file
selectedDivision: string | null = null;

selectDivision(division: string) {
  this.selectedDivision = division.trim();
  console.log("SELECTED DIVISION", this.selectedDivision)
  this.registrationService.setSelectedDivision(division);
  console.log('Current payload:', this.registrationService.getRegistrationPayload());
}

// selectDivision(division: string) {
//   // Ensure correct casing and no leading/trailing spaces
//   if (division === 'Division_One' || division === 'Division_Two') {
//     this.selectedDivision = division.trim(); // just to be safe
//     this.registrationService.setSelectedDivision(this.selectedDivision);
//   } else {
//     console.error("Invalid division selected:", division);
//   }
// }


updatePayload() {
  const payload = {
    division: this.selectedDivision,
  };
  console.log('Current payload:', payload);
}

}
