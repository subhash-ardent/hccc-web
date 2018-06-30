import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
import { AppService }      from './app.service';

@Injectable({
  providedIn: 'root'
})
export class YandeChairGuardService implements CanActivate, CanActivateChild {

  constructor(private appService: AppService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkYandeChairRole(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  checkYandeChairRole(url: string): boolean {
    if (this.appService.isYandeChair) { return true; }

    // Navigate to page not found
    this.router.navigate(['/page-not-found']);
    return false;
      // return true;
  }
}
