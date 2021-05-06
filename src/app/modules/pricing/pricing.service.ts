import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()

export class PricingService {
  private price: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public price$: Observable<number> = this.price as Observable<number>;

  setPrice(price: number): void {
    this.price.next(price);
  }
}
