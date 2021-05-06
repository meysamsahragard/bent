import {NgModule} from '@angular/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

import {ServicesComponent} from './services.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    MatTreeModule,
    MatIconModule,
    MatCheckboxModule,
    MatFormFieldModule,
    SharedModule
  ],
  declarations: [ServicesComponent],
  exports: [ServicesComponent]
})

export class ServicesModule {

}
