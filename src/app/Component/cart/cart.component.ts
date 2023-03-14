import { Component } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  
  public screenWidth:any;
  public products: any = [];
  public grandTotal: number = 0;
  constructor(private cartService: CartService) {
    if(this.screenWidth < 320 ){
      alert("slln")
     }
    this.cartService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  
   
   console.log("fij")
  }
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }

  show:any=false

  donotshow:any = true
  ngOnInit(){
    this.screenWidth = window.innerWidth
    if(window.screen.width <= 320 && this.products.length != 0){
      this.show = true
    }
    if(window.screen.width < 320){
      this.donotshow = false
    }
    
   
  }
}

