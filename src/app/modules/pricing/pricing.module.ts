import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import {PricingComponent} from './pricing.component';
import {CustomPipesModule} from '../../shared/pipes/custom-pipes.module';
import {PricingRoutes} from './routes';
import {ServicesModule} from './services/services.module';
import {ServicesResolver} from './services-resolver';
import {AdditionalResolver} from './additional-resolver';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(PricingRoutes),
    MatTabsModule,
    CustomPipesModule,
    ServicesModule,
    SharedModule
  ],
  declarations: [PricingComponent],
  providers: [ServicesResolver, AdditionalResolver]
})

export class PricingModule {

}
