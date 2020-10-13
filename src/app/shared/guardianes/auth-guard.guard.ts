import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, RouterModule, Router } from '@angular/router';
import { UserService } from '@core/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private userService: UserService
  ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.userService.isAuthenticated()) {
      if (state.url === '/usuarios/login') {
        this.router.navigate(['./admin']);
      }
      return true;
    }
    if (state.url === '/usuarios/login') {
      return true;
    }
    else {
      this.router.navigate(['./usuarios/login']);
    }
  }

}
