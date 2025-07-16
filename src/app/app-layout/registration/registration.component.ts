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
import { NzNotificationService } from 'ng-zorro-antd/notification';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-registration',
  imports: [RouterModule,NzFormModule, FormsModule,NzCheckboxModule,CommonModule,NzAlertModule,NgIf],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

constructor(private router: Router, private registrationService : RegistrationService, private notification:NzNotificationService) {
}

createNotification(position: 'top', type: 'success'| 'info'| 'warning'| 'error', title: string, message: string ){
  this.notification.create(type, title, message, {nzPlacement: position, nzDuration: 3000});
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

  const savedTeam = localStorage.getItem('selectedTeam');
  if (savedTeam){
    this.selectedTeam = savedTeam;
    console.log("SAVED SELECTED TEAM HERE", this.selectedTeam)
    this.registerData.team = this.selectedTeam;
    console.log("TEAM FROM SERVICE", this.registerData.team)
  }
}

selectedDivision!: string;  
selectedTeam!: string;
registerData: registerModel = new registerModel();

selectDivision(division: string) {
  console.log('User selected division:', division);
  this.registrationService.setSelectedDivision(division);
  this.selectedDivision = division;
  console.log('Selected Division:', division);
}

selectTeam(team:string){
  this.registrationService.setSelectedTeam(team);
  this.selectedTeam = team;
  console.log('Selected Team:', team);
}

// saveAndContinue(form: NgForm) {
//   const selectedDivision = this.selectedDivision || this.registrationService.getFormData().division;
//   console.log('Confirm division from service:', this.registrationService.getFormData().division);
//   console.log("Selected Division:", selectedDivision);
//   console.log("Service Division:", this.registrationService.getFormData().division);

//   const selectedTeam = this.selectedTeam || this.registrationService.getFormData().team;
//   console.log("TEAMCON service team", this.registrationService.getFormData().team)

//   if (this.imageUploading) {
//     alert("Please wait, image is still uploading...");
//     return;
//   }
//   if (!this.registerData.imageUrl) {
//     alert("Please upload an image before continuing.");
//     return;
//   }
//   const payload: registerModel = {
//     ...this.registerData,
//     ...form.value,
//     division: selectedDivision,
//     team: selectedTeam,
//     imageUrl: this.registerData.imageUrl,
//   };
//   console.log('Payload before CONTINUE:', payload);
//   if (!payload.division) {
//     alert('Please select a division before continuing.');
//     return;
//   }
//   if (!payload.team) {
//     alert ('Please select a team before continuing');
//     return;
//   }
//   this.registrationService.setFormData(payload);
//   this.router.navigate(['/registration/step-2']);
// }

saveAndContinue(form:NgForm){
  const selectedDivision = this.selectedDivision || this.registrationService.getFormData().division;
  console.log('Confirm division from service:', this.registrationService.getFormData().division);
  console.log("Selected Division:", selectedDivision);
  console.log("Service Division:", this.registrationService.getFormData().division);

  const selectedTeam = this.selectedTeam || this.registrationService.getFormData().team;
  console.log("TEAMCON service team", this.registrationService.getFormData().team)

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
        team: selectedTeam,
        imageUrl: this.registerData.imageUrl,
      };
      console.log('Payload before CONTINUE:', payload);
      if (!payload.division) {
        alert('Please select a division before continuing.');
        return;
      }
      if (!payload.team) {
        alert ('Please select a team before continuing');
        return;
      }

      this.registrationService.register(payload).subscribe({
        next: (response)=>{
          console.log("reggggggg", response)
          console.log("✅ Registration successful", response);
      this.router.navigate(['/success']);
      this.createNotification("top", "success", "Success!", "Registration successful")
        },
        error: (error)=>{
          console.error("cant register",error)
        },
        complete:()=>{

        }
      })
}


imageUploading = false;

// onFileSelected(event: any) {
//   const file = event.target.files[0];

//   if (file) {
//     this.imageUploading = true; 
//     const formData = new FormData();
//     formData.append('file', file);

//     this.registrationService.uploadImage(formData).subscribe({
//       next: (response) => {
//         this.registerData.imageUrl = response.url;
//         alert('Image Uploaded Successfully');
//         this.imageUploading = false; 
//       },
//       error: (err) => {
//         this.imageUploading = false; 
//         console.error('Image upload failed:', err);
//       }
//     });
//   }
// }

onFileSelected(event: any) {
  const file = event.target.files[0];

  if (file) {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    
    // 1. Validate file type
    if (!validTypes.includes(file.type)) {
      alert('Unsupported file type.');
      return;
    }

    // 2. Optional: Check file size (e.g., max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      alert('File is too large. Max size is 5MB.');
      return;
    }

    this.imageUploading = true;

    // 3. Send to backend
    const formData = new FormData();
    formData.append('file', file);

    this.registrationService.uploadImage(formData).subscribe({
      next: (response) => {
        this.registerData.imageUrl = response.url; 
        alert('Image uploaded successfully');
        this.imageUploading = false;
      },
      error: (err) => {
        this.imageUploading = false;
        console.error('Image upload failed:', err);
        alert('Upload failed. Try again.');
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