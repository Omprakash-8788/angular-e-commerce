import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CartService } from 'src/app/Service/cart.service';
import { MatBadgeModule } from '@angular/material/badge';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public searchTerm!: any;
  public totalItem: number = 0;
  constructor(private cartService: CartService) {
    this.cartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }
}
