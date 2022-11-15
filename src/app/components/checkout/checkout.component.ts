import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  combineLatest,
  concatMap,
  interval,
  Observable,
  of,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
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
  public isEditable = false;
  public isLinear = true;
  public paymentIsFinished = false;
  public form = this.fb.group({
    email: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    county: ['', [Validators.required]],
    city: ['', [Validators.required]],
    address: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    shipment: ['', [Validators.required]],
  });

  public secondForm = this.fb.group({
    cardNumber: ['', [Validators.required]],
    nameOnCard: ['', [Validators.required]],
    expiryDate: ['', [Validators.required]],
    cvv: ['', [Validators.required]],
  });
  public isFormValid: any;
  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isFormValid = false;
  }

  onSubmit() {
    console.log(this.form.value);
  }

  canDeactivate(): boolean {
    if (this.isFormValid) {
      return true;
    }
    return false;
  }

  public makePayment() {
    timer(2000)
      .pipe(
        tap(() => {
          this.paymentIsFinished = true;
        }),
        concatMap(() => afterPay$)
      )
      .subscribe();

    const afterPay$ = timer(3000).pipe(
      take(1),
      tap((it) => {
        this.isFormValid = true;
        this.router.navigate(['']);
        this.cartService.cartItems$.next([]);
        this.cartService.total$.next(0);
      })
    );
  }
}
