import { Component, Input, OnInit } from '@angular/core';
import {} from 'rxjs';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  @Input() price!: number;
  @Input() id!: number;
  @Input() title!: string;
  @Input() rating!: number;
  @Input() brand!: string;
  @Input() image!: string;
  @Input() images!: string[];
  @Input() stock!: number;
  @Input() description!: string;
  @Input() category!: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.images);
  }
}
