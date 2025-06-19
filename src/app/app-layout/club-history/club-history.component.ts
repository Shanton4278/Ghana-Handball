import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RegistrationService } from '../../services/registration.service';
import { registerModel } from '../../models/registration.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-club-history',
  imports: [RouterModule,NzCheckboxModule,NzFormModule,FormsModule],
  templateUrl: './club-history.component.html',
  styleUrl: './club-history.component.scss'
})
export class ClubHistoryComponent {
  constructor(private router: Router, private registrationService : RegistrationService) {
    // this.registerData = new registerModel()
    
  }
  registerData!: registerModel;

ngOnInit() {
  this.registerData = this.registrationService.getFormData();
  console.log("Payload in step2",this.registerData)


  if (!this.registerData || !this.registerData.firstName) {
    this.router.navigate(['/registration/step-1']);
  }
}

//   registerData = {
//   firstName: '',
//   surname: '',
//   dateOfBirth: '',
//   imageUrl: '',
//   division: '',
//   dateOfRegistration: '',
//   gender: '',
//   email: '',
//   phoneNumber: '',
//   idType: '',
//   idNumber: '',
//   presentClub: {
//     name: '',
//     fromDate: '',
//     toDate: ''
//   },
//   formerClubs: [] 
// }


submit(form:NgForm) {
  console.log("Payload before sending:", this.registerData); 
  console.log('Final division value:', this.registerData.division);
console.log('Full payload:', this.registerData);

  this.registrationService.register(this.registerData).subscribe({
    next: (response)=>{
      console.log("form submitted", response)
    },
    error: (error)=>{
      console.log("form error", error)
    }
  })
    
}

  }



  
// }
