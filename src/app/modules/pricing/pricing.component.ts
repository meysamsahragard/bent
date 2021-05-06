import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {PricingService} from './pricing.service';
import {ServiceModel} from '../../shared/service.model';

@Component({
  selector: 'app-pricing',
  templateUrl: 'pricing.component.html',
  styleUrls: ['pricing.component.scss'],
  providers: [PricingService]
})

export class PricingComponent implements OnInit {
  public title = 'Pricing';
  public details = `Select desired services and features from the right panel and we
                  calculate the price on the left. The you can continue the steps.`;
  public price$: Observable<number>;
  public services: ServiceModel[];
  public additional: ServiceModel[];

  private selectedServicesPrice: number[] = [];
  private selectedAdditionalPrice: number[] = [];

  constructor(
    private pricingService: PricingService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.services = data.services;
      this.additional = data.additional;
    });
    this.price$ = this.pricingService.price$;
  }

  setPrice(): void {
    let result = 0;

    [...this.selectedServicesPrice, ...this.selectedAdditionalPrice].forEach(price => {
      result += price;
    });
    this.pricingService.setPrice(result);
  }

  setSelectedServicesPrice(selected: number[]): void {
    this.selectedServicesPrice = selected;
    this.setPrice();
  }

  setSelectedAdditionalPrice(selected: number[]): void {
    this.selectedAdditionalPrice = selected;
    this.setPrice();
  }
}
