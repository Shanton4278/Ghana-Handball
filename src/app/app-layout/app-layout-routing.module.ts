import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClubHistoryComponent } from './club-history/club-history.component';
import { SuccessPageComponent } from './success-page/success-page.component';
// import { AllApplicantsComponent } from './all-applicants/all-applicants.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { authGuard } from '../auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadComponent: () => import('./homepage/homepage.component').then(m => m.HomepageComponent) },
      { path: 'divisions', loadComponent: () => import('./divisions/divisions.component').then(m => m.DivisionsComponent) },
      { path: 'registration', loadComponent: () => import('./registration/registration.component').then(m => m.RegistrationComponent) },
      { path: 'registration/step-2', loadComponent: () => import('./club-history/club-history.component').then(m => m.ClubHistoryComponent) },
      { path: 'success', loadComponent: () => import('./success-page/success-page.component').then(m => m.SuccessPageComponent) },
      {path: 'contact-us', loadComponent: () => import('./contact-us/contact-us.component').then(m => m.ContactUsComponent)},
      {path: 'gallery', loadComponent: () => import('./gallery/gallery.component').then(m => m.GalleryComponent)},
      {path: 'about-us', loadComponent: () => import('./about-us/about-us.component').then(m => m.AboutUsComponent)},
    ]
  },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'top', 
};


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
