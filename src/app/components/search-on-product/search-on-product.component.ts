import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  debounceTime,
  distinctUntilChanged,
  empty,
  Observable,
  pluck,
  startWith,
  switchMap,
  tap,
} from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { HttpService } from 'src/app/services/http.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-search-on-product',
  templateUrl: './search-on-product.component.html',
  styleUrls: ['./search-on-product.component.scss'],
})
export class SearchOnProductComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public notFound = '';
  public isEmpty = true;
  constructor(
    private httpService: HttpService,
    private router: Router,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.httpService.singlePageProducts$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((it) => this.httpService.searchProducts(it)),
      pluck('products'),
      tap((it) => {
        if (!it.length) {
          this.notFound = 'No products found.';
        } else {
          this.productService.setIsHovered();
        }
      })
    );
  }

  public searchProduct(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    if (value === '') {
      this.isEmpty = true;
      this.httpService.searchOnProduct.next(empty);
    } else {
      this.isEmpty = false;
      this.httpService.searchOnProduct.next(value);
    }
  }

  public navigateToProduct(item: Product) {
    console.log(item.id);
    this.router.navigate([[], item.id]);
  }

  displayItem() {
    this.productService.setIsHovered();
  }

  hideItem() {
    this.productService.setIsNotHovered();
  }
}
