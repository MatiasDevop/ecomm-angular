import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  //   standalone: true,
  //  imports: [rou],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  /**
   *
   */
  productList:any [] = [];
  cartObj : any ={
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2024-01-26T12:25:50.919Z"
  }

  constructor(private productService: ProductService) {
    
  }

  ngOnInit(): void {
    // testing git hooks
      console.log("Testing git hooks")
      this.loadAllProducts();  
  }

  loadAllProducts() {
    debugger;
    this.productService.getAllProducts().subscribe((result: any) => {
        this.productList = result.data;
    })
  }

  addItemToCart(productId: number){
    debugger;
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any) => {
      if (result.result) {
        alert("Product Added to Cart");
        this.productService.cardAddedSubject.next(true);
      }
    })
  }
}
