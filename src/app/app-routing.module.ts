import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { CartComponent } from './Component/cart/cart.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ProductComponent } from './Component/product/product.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
