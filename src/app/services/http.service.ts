import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public subject: BehaviorSubject<any> = new BehaviorSubject('');
  public allProducts$ = this.subject.asObservable();

  public searchOnProduct: BehaviorSubject<any> = new BehaviorSubject('');
  public singlePageProducts$ = this.searchOnProduct.asObservable();

  constructor(private http: HttpClient) {}

  public getSingleProduct(id: number): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }

  public setNextValue(value: string) {
    this.subject.next(`https://dummyjson.com/products/search?q=${value}`);
  }

  public setSingleProductNextValue(value: string) {
    this.searchOnProduct.next(
      `https://dummyjson.com/products/search?q=${value}`
    );
  }

  public searchProducts(query: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/search?q=${query}`);
  }
}
