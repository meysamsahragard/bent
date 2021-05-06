import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ContactModel} from '../../shared/contact.model';

@Injectable({providedIn: 'root'})
export class ContactResolver implements Resolve<ContactModel> {
  constructor(private http: HttpClient) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.http.get('api/contact');
  }
}
