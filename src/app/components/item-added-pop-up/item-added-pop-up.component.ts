import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-added-pop-up',
  templateUrl: './item-added-pop-up.component.html',
  styleUrls: ['./item-added-pop-up.component.scss'],
})
export class ItemAddedPopUpComponent implements OnInit {
  public showAddedPopUp: Observable<boolean> =
    this.cartService.productAddedPopUpObs$.pipe(
      switchMap((it) => this.cartService.productAddedPopUpObs$)
    );
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
