import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { registerModel } from '../../models/registration.model';
import { teamsModel } from '../../models/registration.model';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, NgModel } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-divisions',
  imports: [RouterModule,CommonModule,NzFormModule,FormsModule],
  templateUrl: './divisions.component.html',
  styleUrl: './divisions.component.scss'
})
export class DivisionsComponent {

  constructor(private registrationService: RegistrationService, private notification: NzNotificationService){

  }

  createNotification(position: 'top', type: 'success'| 'info'| 'warning'| 'error', title: string, message: string ){
    this.notification.create(type, title, message, {nzPlacement: position, nzDuration: 3000});
  }
  
  ngOnInit(){
    this.getAllTeams()
      // const saved = localStorage.getItem('selectedDivision');
      // this.selectedDivision = saved ?? ''; // fallback to '' if null
    }


  registerData!: registerModel;
  teamsData!: teamsModel
  selectedDivision: string = '';
  selectedTeam!: string
  listOfTeams: any[] = []

//   selectDivision(division: string) {
//     this.selectedDivision = division;
//     console.log("here is the division", this.selectedDivision)
//     localStorage.setItem('selectedDivision', division); 
//     this.registrationService.setSelectedDivision(division);
// }


selectDivision(division: string) {
  if (this.selectedDivision === division) {
    // Deselect if same division is clicked again
    this.selectedDivision = '';
    localStorage.removeItem('selectedDivision');
    this.registrationService.setSelectedDivision('');
    this.selectedTeam = '';
    localStorage.removeItem('selectedTeam');
    this.listOfTeams = [];
    return;
  }

  // Select new division
  this.selectedDivision = division;
  localStorage.setItem('selectedDivision', division);
  this.registrationService.setSelectedDivision(division);

  // Reset and fetch teams
  this.selectedTeam = '';
  localStorage.removeItem('selectedTeam');
  this.listOfTeams = [];

  if (division === 'Division_One') {
    this.divisionOne();
  } else if (division === 'Division_Two') {
    this.divisionTwo();
  }
}



selectTeam(team: string){
  this.selectedTeam = team;
  // console.log("TEAM here is the team",this.selectedTeam)
  localStorage.setItem('selectedTeam',team);
  this.registrationService.setSelectedTeam(team);
}

getAllTeams(){
  this.registrationService.allTeams(this.teamsData).subscribe({
    next: (response) =>{
      // console.log("all teams here", response)
      this.listOfTeams = response.data.teams;
    },
    error: (error)=>{
      // console.error("failed to fetch teams", error)
    },
    complete:()=>{

    }
  })
}

divisionOne(){
  this.registrationService.getDivisionOneTeams().subscribe({
    next: (response) => {
      // console.log("Division One Teams", response);
      this.listOfTeams = response.data.teams;
      // console.log("First set of Teams:", this.listOfTeams[0]);

    },
    error: (error) => {
      // console.error("Failed to fetch Division One teams", error);
    }
  })
}

divisionTwo(){
  this.registrationService.getDivisionTwoTeams().subscribe({
    next: (response) => {
      // console.log("Division Two Teams", response);
      this.listOfTeams = response.data.teams;
      // console.log("Second set of Teams:", this.listOfTeams[0]);

    },
    error: (error) => {
      // console.error("Failed to fetch Division Two teams", error);
    }
  })
}

goToRegistration() {
  if (!this.selectedDivision) {
    // alert('Please select a division before continuing.');
    this.createNotification("top", "warning", "Please wait!", "Please select a division before continuing.");
    return;
  }

  if (!this.selectedTeam) {
    // alert('Please select a team before continuing.');
    this.createNotification("top", "warning", "Please wait!", "Please select a team before continuing.");
    return;
  }
  window.location.href = '/registration'; 
}

}