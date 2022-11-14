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
import { CartComponent } from './components/cart/cart.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchOnProductComponent } from './components/search-on-product/search-on-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartRouteGuard } from './guards/cart-route.guard';
import { ItemAddedPopUpComponent } from './components/item-added-pop-up/item-added-pop-up.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchProductComponent,
    ProductComponent,
    SingleProductComponent,
    ProductInfoComponent,
    CartComponent,
    NavbarComponent,
    SearchOnProductComponent,
    CheckoutComponent,
    ItemAddedPopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [CartRouteGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
