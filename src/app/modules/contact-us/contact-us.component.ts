import {Component} from '@angular/core';

@Component({
  templateUrl: 'contact-us.component.html',
  styleUrls: ['contact-us.component.scss']
})

export class ContactUsComponent {
  public title = 'Contact Us';
  public details = `Select desired services and features from the right panel and we
             calculate the price on the left. The you can continue the steps.`;
}
