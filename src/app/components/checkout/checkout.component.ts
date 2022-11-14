import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  public isFormValid: any;
  constructor(private cartService: CartService, private fb: FormBuilder) {}

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
}
