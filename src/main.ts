// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

function removeLoader() {
  const loader = document.getElementById('app-loader');
  if (loader) {
    loader.style.opacity = '0';
    setTimeout(() => loader.remove(), 400);
  }
}

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    console.log('Angular bootstrapped successfully');
    removeLoader();
  })
  .catch((err) => {
    console.error('Error during bootstrap:', err);
    removeLoader();
  });
