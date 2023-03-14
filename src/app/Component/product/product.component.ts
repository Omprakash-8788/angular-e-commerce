import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  searchKey: any;
  data: any;
  show = true;
  constructor(
    private productData: ApiService,
    private cartService: CartService
  ) {
    productData.data().subscribe((item) => {
      console.log(item);
      this.data = item;
      length = this.data.length;
      if (length != 0) {
        this.show = false;
      }

      this.data.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  ngOnInit(): void {
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }
}
