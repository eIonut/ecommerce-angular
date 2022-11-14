import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  public total$: Observable<number> = this.cartService.totalObs$;
  public cartItems$: Observable<Product[]> = this.cartService.cartItemsObs$;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
