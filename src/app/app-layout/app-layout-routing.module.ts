import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: '',redirectTo: 'layout', pathMatch: 'full'},
  {path: 'layout', component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'divisions', component: DivisionsComponent},
      {path: 'home', component: HomepageComponent},
      {path: 'registration', component:RegistrationComponent},
    ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
