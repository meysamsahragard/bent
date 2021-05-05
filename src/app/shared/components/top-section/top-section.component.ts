import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: 'top-section.component.html',
  styleUrls: ['top-section.component.scss']
})

export class TopSectionComponent {
  @Input() title = '';
  @Input() details = '';
}
