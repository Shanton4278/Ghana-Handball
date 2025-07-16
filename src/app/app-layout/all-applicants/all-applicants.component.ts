import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from '@angular/router';
import { NzTabPosition, NzTabsModule } from 'ng-zorro-antd/tabs';
import { FormsModule, NgModel } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../../services/registration.service';
import { getApplicantsModel, registerModel } from '../../models/registration.model';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
// import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-all-applicants',
  imports: [RouterModule,NzTabsModule,FormsModule,NzFormModule,NzTableModule,NzLayoutModule,NgFor,
    CommonModule,NzPaginationModule],
  templateUrl: './all-applicants.component.html',
  styleUrl: './all-applicants.component.scss'
})
export class AllApplicantsComponent {
  constructor(private router: Router, private registrationService : RegistrationService) {
    // this.registerData = new registerModel()
    this.getApplicantsData = new getApplicantsModel()
    
  }

  getApplicantsData!: getApplicantsModel
  page = 1
  pageSize = 10;
  totalItems = 50;
  pageSizeOptions: number[] = [2, 5, 10, 15];

  ngOnInit(): void{
    this.allApplicants()
  }

  // selectedTab = 'table';
  listOfData:any[] = [];

  selectedTabIndex = 0; 

  selectTab(index: number): void {
    this.selectedTabIndex = index;
  }

  allApplicants(){
    this.getApplicantsData.page = this.page;
    this.getApplicantsData.pageSize = this.pageSize;
    this.registrationService.fetchApplicants(this.getApplicantsData).subscribe({
      next: (response)=>{
        this.listOfData = response.data
        console.log("all applicants here", response)
        this.totalItems = response.pagination.total; 
      },
      error: (error)=>{
        console.log("no applicants", error)
      },
      complete: ()=>{

      }
    })
  }

  formatDivision(division: string): string {
    const divisionMap: Record<string, string> = {
      'Division_One': 'Division 1',
      'Division_Two': 'Division 2',
      'Division_Three': 'Division 3',
      'Division_Four': 'Division 4',
    };
  
    return divisionMap[division] || division.replace(/_/g, ' ');
  }

  formatDate(dateString: string): string {
    return dateString.split('T')[0]; 
  }

   ////// PAGINATION    /////// PAGINATION
   onPageChange(page: number): void {
    this.page = page;
    this.allApplicants();
  }
  
  getStartItem(): number {
    return (this.page - 1) * this.pageSize + 1;
  }
  
  getEndItem(): number {
    return Math.min(this.page * this.pageSize, this.totalItems);
  }

  onPageSizeChange(): void {
    this.page = 1;
    this.allApplicants();
  }
  
}
