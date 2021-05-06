import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {ContactUsComponent} from './contact-us.component';
import {ContactUsRoutes} from './routes';
import {CardComponent} from './card/card.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(ContactUsRoutes),
    SharedModule],
  declarations: [ContactUsComponent, CardComponent]
})

export class ContactUsModule {

}
