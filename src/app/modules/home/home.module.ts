import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule} from '@angular/router';
import {HomeRoutes} from './routes';
import {TopSectionModule} from '../../shared/components/top-section/top-section.module';

@NgModule({
    imports: [RouterModule.forChild(HomeRoutes), TopSectionModule],
  declarations: [HomeComponent],
})
export class HomeModule {
}
