import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { UserCardComponent } from './app/user-card/user-card.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
