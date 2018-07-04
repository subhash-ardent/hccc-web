import {Injectable} from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import {AppService} from './app.service';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {delayWhen, map, take, catchError} from 'rxjs/operators';
import {LoggerService} from './logger.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  private logger = new LoggerService(this.constructor.name);
    constructor(private appService: AppService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.checkLogin();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return this.canActivate(route, state);
    }

    async checkLogin(): Promise<boolean> {
      if (!this.appService.isinitialDataLoaded) {
        await this.appService.loadInitialData();
      }
      return this.appService.isLoggedIn$.pipe(
        take(1),
        map(isLoggedIn => {
          if (!isLoggedIn) {
            this.router.navigate(['/login-redirect']);
          }
          return isLoggedIn;
        }),
        catchError(this.appService.handleFatalError<boolean>(`checkLogin`))
      ).toPromise();
    }

}
