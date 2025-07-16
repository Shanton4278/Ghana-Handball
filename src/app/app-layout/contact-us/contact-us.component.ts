import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-contact-us',
  imports: [RouterModule,NzFormModule,FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  constructor(private notification:NzNotificationService){}

  createNotification(position: 'bottom', type: 'success'| 'info'| 'warning'| 'error', title: string, message: string ){
    this.notification.create(type, title, message, {nzPlacement: position, nzDuration: 3000});
  }

   ///// COPY ICON
   copiedText: string | null = null;

   copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() => {
      this.copiedText = text;
      this.notification.create(
        "info",
        "Copied!",
        `${text} copied to clipboard`
      );
      console.log("copied");
      setTimeout(() => this.copiedText = null, 3000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
  
}
