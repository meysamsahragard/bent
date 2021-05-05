import {NgModule} from '@angular/core';
import {YearPipe} from './year.pipe';
import {MonthPipe} from './month.pipe';

@NgModule({
  declarations: [YearPipe, MonthPipe],
  exports: [YearPipe, MonthPipe]
})

export class CustomPipesModule {

}
