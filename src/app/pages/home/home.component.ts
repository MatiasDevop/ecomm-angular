import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.model';
import { Order } from '../../interfaces/order.model';
import { ApiResponse } from '../../interfaces/api-remove-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  productList: Product[] = [];
  cartObj: Order = {
    'CartId': 0,
    'CustId': 1,
    'ProductId': 0,
    'Quantity': 0,
    'AddedDate': '2024-01-26T12:25:50.919Z',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts() {
    this.productService.getAllProducts().subscribe((result: ApiResponse<Product[]>) => {
      this.productList = result.data || [];
    });
  }

  addItemToCart(productId: number) {
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: ApiResponse<null>) => {
      if (result.result) {
        alert('Product Added to Cart');
        this.productService.cardAddedSubject.next(true);
      }
    });
  }
}
