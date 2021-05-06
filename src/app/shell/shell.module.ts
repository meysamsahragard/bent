import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';

import {HeaderComponent} from './header/header.component';
import {ShellComponent} from './shell.component';
import {ShellRoutes} from './routes';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    MatToolbarModule,
    RouterModule,
    RouterModule.forChild(ShellRoutes),
    SharedModule
  ],
  declarations: [ShellComponent, HeaderComponent]
})

export class ShellModule {

}
