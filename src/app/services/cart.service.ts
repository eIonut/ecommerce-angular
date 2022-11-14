import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, pluck, reduce, filter } from 'rxjs';
import { Product } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems$: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  public cartItemsObs$: Observable<Product[]> = this.cartItems$.asObservable();

  public cartTotal$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>(
    []
  );
  public cartTotalObs$: Observable<number[]> = this.cartTotal$.asObservable();

  public total$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public totalObs$: Observable<number> = this.total$.asObservable();

  public isCartOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isCartOpenedObs$: Observable<boolean> =
    this.isCartOpened.asObservable();

  constructor() {}

  public addToCart(product: Product) {
    const newId = product.id + (Math.random() + 1 * 10);
    const newProduct: Product = {
      ...product,
      id: newId,
    };

    const updatedItems = [...this.cartItems$.getValue(), newProduct];
    this.cartItems$.next(updatedItems);

    const price = [...this.cartTotal$.getValue(), newProduct.price];
    const totalPrice = price.reduce(
      (acc: number, val: number) => acc + val,
      this.total$.getValue()
    );
    this.total$.next(totalPrice);
  }

  public getCartItems(): Observable<Product[]> {
    return this.cartItemsObs$;
  }

  public removeItem(id: number) {
    const updatedItems = this.cartItems$
      .getValue()
      .filter((item) => item.id !== id);
    this.cartItems$.next(updatedItems);
    const updatedPrice = updatedItems.map((item) => item.price);
    const price = updatedPrice.reduce(
      (acc: number, val: number) => acc + val,
      0
    );
    this.total$.next(price);
  }
}
