import {Injectable} from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild
} from '@angular/router';
import {AppService} from './app.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(private appService: AppService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if (this.appService.isLoggedIn) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.appService.authRedirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login-redirect']);
        return false;
    }
}
