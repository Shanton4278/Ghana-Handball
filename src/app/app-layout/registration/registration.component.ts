import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RegistrationService } from '../../services/registration.service';
import { registerModel } from '../../models/registration.model';

@Component({
  selector: 'app-registration',
  imports: [RouterModule,NzFormModule, FormsModule,NzCheckboxModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

constructor(private router: Router, private registrationService : RegistrationService) {
  this.registerData = new registerModel()
}

registerData : registerModel = new registerModel()
selectedDivision!: string;


selectDivision(division: string) {
  this.selectedDivision = division;
  this.registrationService.setSelectedDivision(division);
}


//   saveAndContinue(form: NgForm) {
//     if (form.valid) {
//       this.registerData.division = this.selectedDivision;
//       const payload = this.registrationService.getRegistrationPayload();
// const division = payload.division; 
// console.log('Division:', division);
//       this.registrationService.setSelectedDivision(this.selectedDivision);  
//       this.registrationService.setFormData(this.registerData);
//       console.log("Payload being sent" , this.registerData)
//       this.router.navigate(['/registration/step-2']);
//     }
//   }

// saveAndContinue(form: NgForm) {
//   if (form.valid) {
//     // 1. Update registerData with form values
//     this.registerData = { ...this.registerData, ...form.value };
    
//     // 2. Explicitly set the division (ensures it doesn't get overwritten)
//     this.registerData.division = this.selectedDivision;
    
//     // 3. Send to service (now includes division)
//     this.registrationService.setFormData(this.registerData);
    
//     console.log("Final Payload with Division:", this.registerData);
//     this.router.navigate(['/registration/step-2']);
//   }
// }

saveAndContinue(form: NgForm) {
  if (form.valid) {
    // Get the latest data from service first
    const currentPayload = this.registrationService.getRegistrationPayload();
    
    // Update with form values while preserving division
    this.registerData = {
      ...currentPayload,      // Gets division from service
      ...form.value,         // Form fields
      division: this.selectedDivision || currentPayload.division // Ensures division stays
    };
    
    // Send to service
    this.registrationService.setFormData(this.registerData);
    
    console.log("Final Payload:", this.registerData);
    this.router.navigate(['/registration/step-2']);
  }
}

  imagePreview: string | ArrayBuffer | null = null;

// onFileSelected(event: any): void {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.imagePreview = reader.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;

  if (input.files && input.files[0]) {
    const file = input.files[0];
    const formData = new FormData();
    formData.append('file', file);

    this.registrationService.uploadImage(formData).subscribe({
      next: (response) => {
        console.log('Upload response:', response);
        this.registerData.imageUrl = response.imageUrl
        console.log('Image uploaded successfully:', this.registerData.imageUrl);
      },
      error: (err) => {
        console.error('Image upload failed:', err);
      }
    });  
  }
}



}
