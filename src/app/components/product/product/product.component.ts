import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateToItem() {
    this.router.navigate(['product', this.id]);
  }
}
