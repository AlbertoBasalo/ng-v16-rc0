import { Route } from '@angular/router';
import { HomePage } from './routes/home/home.page';

export const APP_ROUTES: Route[] = [
  { path: '', component: HomePage },
  {
    path: 'contact',
    loadComponent: () => import('./routes/contact/contact.page'),
  },
];
