import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  public product$!: Observable<Product>;
  public isHttpLoaded = false;
  public isBlurred$ = this.productService.isHovered$;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.cartService.productAddedPopUp.next(false);

    this.httpService.searchOnProduct.next(null);

    this.product$ = this.route.params.pipe(
      switchMap((data) => {
        return this.httpService.getSingleProduct(data['id']);
      }),
      tap(() => {
        this.isHttpLoaded = true;
        setTimeout(() => (this.isHttpLoaded = false), 500);
      })
    );
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
