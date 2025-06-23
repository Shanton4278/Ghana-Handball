import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RegistrationService } from '../../services/registration.service';
import { registerModel } from '../../models/registration.model';
import { CommonModule } from '@angular/common';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'app-registration',
  imports: [RouterModule,NzFormModule, FormsModule,NzCheckboxModule,CommonModule,NzAlertModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

constructor(private router: Router, private registrationService : RegistrationService) {
}

ngOnInit():void{
  const savedDivision = localStorage.getItem('selectedDivision');
  if (savedDivision) {
    // this.selectedDivision = JSON.parse(savedDivision).division;
    this.selectedDivision = savedDivision;
    console.log("selected division arrived", this.selectedDivision)
    this.registerData.division = this.selectedDivision;
    console.log("sected from service appeared", this.registerData.division)
  }
}

// registerData!: registerModel;
selectedDivision!: string;  
registerData: registerModel = new registerModel();

selectDivision(division: string) {
  console.log('[Component] User selected division:', division);
  this.registrationService.setSelectedDivision(division);
  this.selectedDivision = division;
  console.log('Selected Division:', division);
}

saveAndContinue(form: NgForm) {
  const selectedDivision = this.selectedDivision || this.registrationService.getFormData().division;
  console.log('Confirm division from service:', this.registrationService.getFormData().division);
  console.log("Selected Division:", selectedDivision);
  console.log("Service Division:", this.registrationService.getFormData().division);

  if (this.imageUploading) {
    alert("Please wait, image is still uploading...");
    return;
  }
  if (!this.registerData.imageUrl) {
    alert("Please upload an image before continuing.");
    return;
  }
  const payload: registerModel = {
    ...this.registerData,
    ...form.value,
    division: selectedDivision,
    imageUrl: this.registerData.imageUrl,
  };
  console.log('Payload before CONTINUE:', payload);
  if (!payload.division) {
    alert('Please select a division before continuing.');
    return;
  }
  this.registrationService.setFormData(payload);
  this.router.navigate(['/registration/step-2']);
}


imageUploading = false;

onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    this.imageUploading = true; 
    const formData = new FormData();
    formData.append('file', file);

    this.registrationService.uploadImage(formData).subscribe({
      next: (response) => {
        this.registerData.imageUrl = response.url;
        alert('Image Uploaded Successfully');
        this.imageUploading = false; 
      },
      error: (err) => {
        this.imageUploading = false; 
        console.error('Image upload failed:', err);
      }
    });
  }
}


// Optional: helps check if string is a URL to an image
isUrlImage(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

removeImage() {
  this.registerData.imageUrl = '';
  this.imageUploading = false;
  const formData = this.registrationService.getFormData();
  formData.imageUrl = '';
  this.registrationService.setFormData(formData);
}

}