import {Component} from '@angular/core';
import {Data, RouterOutlet} from '@angular/router';
import {routerTransition} from './router-transition';

@Component({
  templateUrl: 'shell.component.html',
  styleUrls: ['shell.component.scss'],
  animations: [
    routerTransition
  ]
})

export class ShellComponent {
  prepareRoute(outlet: RouterOutlet): Data {
    return outlet && outlet.activatedRouteData;
  }
}
