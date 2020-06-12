import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserStorageService } from '../services/user-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // inyectar el servicxe
  constructor(
    private userStorageService: UserStorageService,
    private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // el usuario esta autenticado ?
      if( !this.userStorageService.isAuthenticaded ) {
        this.router.navigate(['/login']);
        return false;
      }

    return true;
  }
}
