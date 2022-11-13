import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchProductComponent } from './components/search-product/search-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product/product.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, SearchProductComponent, ProductComponent, SingleProductComponent, ProductInfoComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
