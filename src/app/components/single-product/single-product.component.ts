import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap, take } from 'rxjs';
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
  private id!: number;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.httpService.searchOnProduct.next(null);

    this.route.params
      .pipe(take(1))
      .subscribe((params) => (this.id = params['id']));
    this.product$ = this.httpService
      .getSingleProduct(this.id)
      .pipe(tap((it) => console.log(it)));
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
