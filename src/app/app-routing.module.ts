import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CartRouteGuard } from './guards/cart-route.guard';
const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  {
    path: 'product/:id',
    component: SingleProductComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [CartRouteGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
