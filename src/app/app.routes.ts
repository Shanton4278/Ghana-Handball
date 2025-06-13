// import { Routes } from '@angular/router';

import { Routes } from "@angular/router";


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'app-layout' },
  {
    path: 'auth',
    loadChildren: () =>
      import('../app/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'app-layout',
    loadChildren: () =>
      import('../app/app-layout/app-layout.module').then(
        (m) => m.AppLayoutModule
      ),
  },
];
