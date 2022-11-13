import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() price!: number;
  @Input() id!: number;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() brand!: string;
  @Input() image!: string;
  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {}

  public navigateToItem() {
    this.router.navigate(['product', this.id]);
  }

  public addToCart(event: Event) {
    event.stopPropagation();
    this.cartService.addToCart({
      title: this.title,
      price: this.price,
      id: this.id,
      rating: this.rating,
      brand: this.brand,
      thumbnail: this.image,
      images: [],
      stock: 0,
      description: '',
      category: '',
    });
  }
}
