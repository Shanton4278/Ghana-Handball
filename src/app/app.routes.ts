import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => 
    import('./app-layout/app-layout.module').then(m => m.AppLayoutModule)},
];
