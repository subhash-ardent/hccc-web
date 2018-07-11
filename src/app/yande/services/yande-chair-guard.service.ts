import {Injectable} from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
} from '@angular/router';
import {AppService} from '../../app.service';
import {catchError, delayWhen, map, take} from 'rxjs/operators';
import {Observable, of, timer} from 'rxjs';
import {LoggerService} from '../../core/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class YandeChairGuardService implements CanActivate, CanActivateChild {
  private logger = new LoggerService(this.constructor.name);

  constructor(private appService: AppService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.checkYandeChairRole();
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.canActivate(route, state);
  }

  async checkYandeChairRole(): Promise<boolean> {
    if (!this.appService.isinitialDataLoaded) {
      await this.appService.loadInitialData();
    }
    return this.appService.isYandeChair$.pipe(
      take(1),
      map(isYandeChair => {
        if (!isYandeChair) {
          this.router.navigate(['/login-redirect']);
        }
        return isYandeChair;
      }),
      catchError(this.appService.handleFatalError<boolean>(`checkLogin`))
    ).toPromise();
  }

}
