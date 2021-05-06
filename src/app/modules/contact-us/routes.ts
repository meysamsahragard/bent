import {Routes} from '@angular/router';

import {ContactUsComponent} from './contact-us.component';
import {ContactResolver} from './contact.resolver';

export const ContactUsRoutes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
    resolve: {
      contacts: ContactResolver
    }
  }
];


