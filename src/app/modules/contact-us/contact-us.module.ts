import {NgModule} from '@angular/core';
import {ContactUsComponent} from './contact-us.component';
import {RouterModule} from '@angular/router';
import {ContactUsRoutes} from './routes';
import {TopSectionModule} from '../../shared/components/top-section/top-section.module';

@NgModule({
  imports: [RouterModule.forChild(ContactUsRoutes), TopSectionModule],
  declarations: [ContactUsComponent]
})

export class ContactUsModule {

}
