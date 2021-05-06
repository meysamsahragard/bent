import {Injectable} from '@angular/core';
import {HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

import {Services} from './services';
import {Additional} from './aditionals';
import {Contact} from './contact';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method} = request;

    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/services') && method === 'GET':
          return getServices();
        case url.endsWith('/additional') && method === 'GET':
          return getAdditional();
        case url.endsWith('/contact') && method === 'GET':
          return getContact();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    function getServices() {
      return ok(Services);
    }

    function getAdditional() {
      return ok(Additional);
    }

    function getContact() {
      return ok(Contact);
    }

    // helper functions

    function ok(body?) {
      return of(new HttpResponse({status: 200, body}));
    }

  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
