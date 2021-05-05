import {NgModule} from '@angular/core';
import {ShellComponent} from './shell.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {HeaderComponent} from './header/header.component';
import {RouterModule} from '@angular/router';
import {ShellRoutes} from './routes';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forChild(ShellRoutes)
  ],
  declarations: [ShellComponent, HeaderComponent]
})

export class ShellModule {

}
