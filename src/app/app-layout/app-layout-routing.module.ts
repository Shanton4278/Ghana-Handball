import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

import { EmployeeDirectoryComponent } from './pages/employee-directory/employee-directory.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CardComponent } from './pages/card/card.component';
// import { DivisionsComponent } from './pages/divisions/divisions.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'layout' },
  {path: 'layout', component: LayoutComponent, 
  children: [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'registration', component: RegistrationComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'card', component: CardComponent},
]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
