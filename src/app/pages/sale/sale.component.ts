import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartProduct } from '../../interfaces/cart-product.model';
import { ApiResponse } from '../../interfaces/api-remove-response.model';
import { SaleModel } from '../../interfaces/sale-model';

@Component({
  selector: 'app-sale',
  // standalone: true,
  // imports: [],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css',
})
export class SaleComponent implements OnInit {
  cartProducts: CartProduct[] = [];
  subTotal: number = 0;
  saleObj: SaleModel = {
    'SaleId': 0,
    'CustId': 1,
    'SaleDate': new Date(),
    'TotalInvoiceAmount': 0,
    'Discount': 0,
    'PaymentNaration': 'Payt 12',
    'DeliveryAddress1': 'Badalona 123',
    'DeliveryAddress2': 'mar 213',
    'DeliveryCity': 'Barcelona',
    'DeliveryPinCode': '0123',
    'DeliveryLandMark': 'ATM',
  };

  constructor(private productService: ProductService) {}

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

  removeItem(id: number) {
    this.productService.removeCartItemById(id).subscribe((res: ApiResponse<null>) => {
      if (res.result) {
        this.productService.cardAddedSubject.next(true);
        this.loadCart();
      }
    });
  }

  makeSale() {
    this.saleObj.TotalInvoiceAmount = this.subTotal;
    this.productService.cardAddedSubject.next(true);
    this.productService.makeSale(this.saleObj).subscribe((res: ApiResponse) => {
      if (res.result) {
        alert('Sales success');
        this.loadCart();
        this.productService.cardAddedSubject.next(true);
      }
    });
  }
}
