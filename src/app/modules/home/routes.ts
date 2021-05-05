import {HomeComponent} from './home.component';
import {Routes} from '@angular/router';

export const HomeRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];
