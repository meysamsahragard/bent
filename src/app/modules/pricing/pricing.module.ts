import {NgModule} from '@angular/core';
import {PricingComponent} from './pricing.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {CustomPipesModule} from '../../shared/pipes/custom-pipes.module';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {RouterModule} from '@angular/router';
import {PricingRoutes} from './routes';
import {TopSectionModule} from '../../shared/components/top-section/top-section.module';

@NgModule({
  imports: [
    RouterModule.forChild(PricingRoutes),
    MatCardModule,
    CommonModule,
    CustomPipesModule,
    MatButtonModule,
    MatTabsModule,
    TopSectionModule
  ],
  declarations: [PricingComponent]
})

export class PricingModule {

}
