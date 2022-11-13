import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, Observable, pluck, tap, take, takeUntil } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  public product$!: Observable<any>;
  private id!: number;
  constructor(
    private httpService: HttpService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(take(1))
      .subscribe((params) => (this.id = params['id']));
    this.product$ = this.httpService.getSingleProduct(this.id).pipe(tap(it => console.log(it)))
  }
}
