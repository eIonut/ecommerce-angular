import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  distinctUntilChanged,
  map,
  Observable,
  pluck,
  reduce,
  scan,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public isCartShown = false;
  public zeroItems = false;
  public cartItems$!: Observable<Product[]>;
  public cartItemsNumber$!: Observable<number>;
  public total!: number;
  public total$!: Observable<number>;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCartItems();
    this.cartItemsNumber$ = this.cartItems$.pipe(
      map((item) => item.length),
      distinctUntilChanged()
    );

    this.total$ = this.cartService.totalObs$;
  }

  public showCart(): void {
    this.isCartShown = !this.isCartShown;
    this.cartService.isCartOpened.next(true);
  }

  public hideCart(): void {
    this.isCartShown = false;
    this.cartService.isCartOpened.next(false);
  }

  public deleteItem(id: number): void {
    this.cartService.removeItem(id);
  }
}
