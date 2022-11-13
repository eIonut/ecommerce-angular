import { Component, OnInit } from '@angular/core';
import {
  distinctUntilChanged,
  map,
  Observable,
  pluck,
  reduce,
  scan,
  tap,
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
  public cartTotal$!: Observable<number>;
  public total!: number;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.getCartItems();
    this.cartItemsNumber$ = this.cartItems$.pipe(
      map((item) => item.length),
      distinctUntilChanged()
    );

    this.cartTotal$ = this.cartService.cartTotalObs$.pipe(
      map(
        (item) => item.reduce((total, price) => total + price, 0),
        tap((it) => console.log(it))
      )
    );
  }

  public showCart(): void {
    this.isCartShown = !this.isCartShown;
  }

  public hideCart(): void {
    this.isCartShown = false;
  }

  public deleteItem(id: number): void {
    this.cartService.removeItem(id);
  }
}
