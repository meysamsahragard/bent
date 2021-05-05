import {Component} from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.scss']
})

export class PricingComponent {
  public title = 'Pricing';
  public details = `Select desired services and features from the right panel and we
                  calculate the price on the left. The you can continue the steps.`;

}
