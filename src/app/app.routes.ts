import { Routes } from '@angular/router';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: '', loadChildren: () => 
    import('./app-layout/app-layout.module').then(m => m.AppLayoutModule)
    },
    {
        path: 'auth',
        loadChildren: () => 
        import('../app/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
        ),
    }
];
