import { Component } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { RegistrationService } from '../../services/registration.service';
import { registerModel } from '../../models/registration.model';
import { NgForm } from '@angular/forms';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-club-history',
  imports: [RouterModule,NzCheckboxModule,NzFormModule,FormsModule,NgFor,CommonModule],
  templateUrl: './club-history.component.html',
  styleUrl: './club-history.component.scss'
})
export class ClubHistoryComponent {
  constructor(private router: Router, private registrationService : RegistrationService, private notification:NzNotificationService) {
    // this.registerData = new registerModel()
    
  }
  registerData: registerModel = new registerModel();
  selectedDivision!: string;

ngOnInit() {
  
}
createNotification(position: 'top', type: 'success'| 'info'| 'warning'| 'error', title: string, message: string ){
  this.notification.create(type, title, message, {nzPlacement: position, nzDuration: 3000});
}


submit(form: NgForm) {
  console.log(' SUBMIT TRIGGERED');

  const previousData = this.registrationService.getFormData(); // division + step 1 data
  const formData = form.value; // current step data (e.g. formerClubs, presentClub, etc.)

  const finalPayload: registerModel = {
    ...previousData,
    ...formData,
    formerClubs: this.registerData.formerClubs,
    presentClub: this.registerData.presentClub,
  };

  console.log('📦 Final Payload for Submission:', finalPayload);

  this.registrationService.register(finalPayload).subscribe({
    next: (response) => {
      console.log("✅ Registration successful", response);
      this.router.navigate(['/success']);
      this.createNotification("top", "success", "Success!", "Registration successful")
    },
    error: (error) => {
      console.log("Form error", error);
      if (error.error?.message) {
        this.createNotification("top", "error", "Registration failed.", error.error.message);
        console.log("Server says:", error.error.message);

      }
    }
  });
}




// submit(form: NgForm) {
//   alert("Form submitted!");
//   console.log("🔥 SUBMIT TRIGGERED");
// }


  }

