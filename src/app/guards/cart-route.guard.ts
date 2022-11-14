import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from '../services/cart.service';

@Injectable()
export class CartRouteGuard implements CanActivate {
  constructor(private cartService: CartService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let cartOpened = false;
    this.cartService.isCartOpenedObs$.subscribe((item) => (cartOpened = item));
    if (cartOpened) {
      return true;
    } else {
      return this.router.parseUrl('');
    }
  }
}
