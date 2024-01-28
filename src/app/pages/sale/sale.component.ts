import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-sale',
  // standalone: true,
  // imports: [],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css'
})
export class SaleComponent implements OnInit{

  /**
   *
   */
  
  cartProducts: any[] = [];
  subTotal: number = 0;
  saleObj: any = 
    {
      "SaleId": 0,
      "CustId": 1,
      "SaleDate": new Date(),
      "TotalInvoiceAmount": 0,
      "Discount": 0,
      "PaymentNaration": "Payt 12",
      "DeliveryAddress1": "Badalona 123",
      "DeliveryAddress2": "mar 213",
      "DeliveryCity": "Barcelona",
      "DeliveryPinCode": "0123",
      "DeliveryLandMark": "ATM"
    };
  
  constructor(private productService: ProductService) {
    debugger;
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.subTotal = 0;
    this.productService.getCartItemsByCustId(1).subscribe((res: any) => {
        this.cartProducts = res.data;
        this.cartProducts.forEach(element => {
          this.subTotal = this.subTotal + element.productPrice;
        });
        debugger;
    })  
  }

  removeItem(id: number){
    this.productService.removeCartItemById(id).subscribe((res: any) =>{
      if (res.result) {
        this.productService.cardAddedSubject.next(true);
        this.loadCart();
      }
    })
  }

  makeSale() {
    this.saleObj.TotalInvoiceAmount = this.subTotal;
    this.productService.cardAddedSubject.next(true);
    this.productService.makeSale(this.saleObj).subscribe((res: any) =>{
      if (res.result) {
        alert('Sales success')
        this.loadCart();
        this.productService.cardAddedSubject.next(true);
      }
    })
  }
}
