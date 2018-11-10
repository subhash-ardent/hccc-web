import {Injectable} from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {map, take, delayWhen, catchError} from 'rxjs/operators';

import {IndemnityForm} from '../models/indemnity-forms';
import {YandeApiService} from './yande-api.service';
import {AppService} from '../../app.service';

@Injectable({
  providedIn: 'root'
})
export class IndemnityFormListResolveService implements Resolve<IndemnityForm[]> {

  constructor(private appService: AppService,
              private apiService: YandeApiService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IndemnityForm[]> {
    return this.getIndemnityForms();
  }

  async getIndemnityForms(): Promise<IndemnityForm[]> {
    if (!this.apiService.isIndemnityFormsLoaded) {
      await this.apiService.loadIndemnityForms();
    }
    return this.apiService.indemnityForms$.pipe(
      take(1),
      map(indemnityForms => {
        // if (!indemnityForms || indemnityForms.length === 0) {
        //   throw new Error('IndemnityForms List is Empty');
        // } else {
          return indemnityForms;
        // }
      }),
      catchError(this.appService.handleFatalError<IndemnityForm[]>(`get indemnityForms`))
    ).toPromise();
  }
}
