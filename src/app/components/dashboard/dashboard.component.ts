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

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public products$!: Observable<any>;
  public notFound = '';
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.products$ = this.httpService.allProducts$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((it) => this.httpService.searchProducts(it)),
      pluck('products'),
      tap((it) => {
        if (!it.length) {
          this.notFound = 'No products found.';
        }
      })
    );
  }
}
