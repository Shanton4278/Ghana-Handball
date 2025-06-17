import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'app-layout', pathMatch: 'full'},
    {path: 'app-layout', loadChildren: () => 
    import('./app-layout/app-layout.module').then(m => m.AppLayoutModule)},
];
