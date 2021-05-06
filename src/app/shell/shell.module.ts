import {NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';

import {ShellComponent} from './shell.component';
import {ShellRoutes} from './routes';
import {SharedModule} from '../shared/shared.module';
import {LayoutComponent} from './layout/layout.component';
import {SidenavListComponent} from './navigation/sidenav-list/sidenav-list.component';
import {HeaderComponent} from './navigation/header/header.component';

@NgModule({
  imports: [
    MatToolbarModule,
    RouterModule,
    RouterModule.forChild(ShellRoutes),
    SharedModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  declarations: [
    ShellComponent,
    HeaderComponent,
    LayoutComponent,
    SidenavListComponent,
    HeaderComponent]
})

export class ShellModule {

}
