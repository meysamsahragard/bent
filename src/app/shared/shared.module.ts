import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

import {TopSectionModule} from './top-section/top-section.module';

const Modules = [
  MatCardModule,
  MatButtonModule,
  TopSectionModule,
  CommonModule
];

@NgModule({
  imports: Modules,
  exports: Modules
})

export class SharedModule {

}
