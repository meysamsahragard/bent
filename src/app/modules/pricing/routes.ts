import {Routes} from '@angular/router';
import {PricingComponent} from './pricing.component';
import {AdditionalResolver} from './additional-resolver';
import {ServicesResolver} from './services-resolver';

export const PricingRoutes: Routes = [
  {
    path: '',
    component: PricingComponent,
    resolve: {
      services: ServicesResolver,
      additional: AdditionalResolver
    }
  }
];


