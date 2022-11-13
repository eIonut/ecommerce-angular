import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems$: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  public cartItemsObs$: Observable<Product[]> = this.cartItems$.asObservable();
  constructor() {}

  public addToCart(product: Product) {
    const newId = product.id + (Math.random() + 1 * 10);
    console.log(newId);
    const newProduct: Product = {
      ...product,
      id: newId,
    };

    const updatedItems = [...this.cartItems$.getValue(), newProduct];
    this.cartItems$.next(updatedItems);
  }

  public getCartItems(): Observable<Product[]> {
    return this.cartItemsObs$;
  }

  public removeItem(id: number) {
    const updatedItems = this.cartItems$
      .getValue()
      .filter((item) => item.id !== id);
    this.cartItems$.next(updatedItems);
  }
}
