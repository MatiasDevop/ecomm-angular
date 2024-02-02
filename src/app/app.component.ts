import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './services/product.service';
import { CartProduct } from './interfaces/cart-product.model';
import { ApiResponse } from './interfaces/api-remove-response.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-dev-ecommerce';
  cartProducts: CartProduct[] = [];
  subTotal: number = 0;

  constructor(
    private productService: ProductService,
    private router: Router,
  ) {
    this.productService.cardAddedSubject.subscribe((res) => {
      if (res === true) this.loadCart();
    });
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(1).subscribe((res: ApiResponse<CartProduct[]>) => {
      this.cartProducts = res.data || [];
      this.cartProducts.forEach((element) => {
        this.subTotal = this.subTotal + element.productPrice;
      });
    });
  }

  redirectToSale() {
    this.router.navigateByUrl('sale');
  }
}
