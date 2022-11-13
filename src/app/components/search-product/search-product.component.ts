import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss'],
})
export class SearchProductComponent implements OnInit {
  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  public searchProduct(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.httpService.subject.next(value);
  }
}
