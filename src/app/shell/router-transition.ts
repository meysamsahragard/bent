import {
  trigger,
  transition,
  style,
  animate,
} from '@angular/animations';

export const routerTransition = trigger('routeAnimations', [
  transition('* <=> *', [
    style({opacity: 0, transform: 'translateY(10px)'}),
    animate('500ms', style({opacity: 1, transform: 'translateY(0)'})),
  ])
])
