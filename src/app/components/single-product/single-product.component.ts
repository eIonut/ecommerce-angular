import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  public product$!: Observable<Product>;

  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.productAddedPopUp.next(false);

    this.httpService.searchOnProduct.next(null);

    this.product$ = this.route.params.pipe(
      switchMap((data) => {
        return this.httpService.getSingleProduct(data['id']);
      })
    );
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
