import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClubHistoryComponent } from './club-history/club-history.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { AllApplicantsComponent } from './all-applicants/all-applicants.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'divisions', component: DivisionsComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'registration/step-2', component: ClubHistoryComponent },
      { path: 'success', component: SuccessPageComponent },
      {path: 'all', component: AllApplicantsComponent},
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
