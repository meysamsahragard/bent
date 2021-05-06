import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {HomeRoutes} from './routes';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild(HomeRoutes),
    SharedModule],
  declarations: [HomeComponent],
})
export class HomeModule {
}
