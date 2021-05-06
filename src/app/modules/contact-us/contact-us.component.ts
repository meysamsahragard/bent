import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ContactModel} from '../../shared/contact.model';

@Component({
  templateUrl: 'contact-us.component.html'
})

export class ContactUsComponent implements OnInit {
  public title = 'Contact Us';
  public details = `Select desired services and features from the right panel and we
             calculate the price on the left. The you can continue the steps.`;
  public contacts: ContactModel[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => {
      this.contacts = data.contacts;
    });
  }

}
