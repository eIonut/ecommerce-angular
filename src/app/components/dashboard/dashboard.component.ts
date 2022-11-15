import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import {
  map,
  switchMap,
  debounceTime,
  distinctUntilChanged,
  Observable,
  pluck,
  tap,
} from 'rxjs';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public products$!: Observable<Product[]>;
  public notFound = '';
  public isLoaded = false;
  public isHttpLoaded = false;
  constructor(
    private httpService: HttpService,
    private cartService: CartService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.route.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          console.log('navigation starts');
          this.isLoaded = true;
        } else if (event instanceof NavigationEnd) {
          console.log('navigation ends');
          this.isLoaded = false;
        }
      },
      (error) => {
        this.isLoaded = false;
        console.log(error);
      }
    );

    this.cartService.productAddedPopUp.next(false);
    this.httpService.subject.next('');
    this.products$ = this.httpService.allProducts$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((it) => this.httpService.searchProducts(it)),
      pluck('products'),
      tap((it) => {
        this.isHttpLoaded = true;
        setTimeout(() => {
          this.isHttpLoaded = false;
        }, 500);
        if (!it.length) {
          this.notFound = 'No products found.';
        }
      })
    );
  }
}
