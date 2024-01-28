import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserInterface } from './interfaces/user-interface.model';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  //  standalone: true,
  //  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app-dev-ecommerce';
  // fruits: string[] = ['Apple', 'Orange', 'Banana'];
  
  /**
   *
   */
  cartProducts: any[] = [];
  subTotal: number = 0;

  constructor(private productService: ProductService, private router: Router) { 
    this.productService.cardAddedSubject.subscribe(res => {
      debugger;
      this.loadCart();
    })
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
  
  redirectToSale(){
    this.router.navigateByUrl("sale");
  }
  
  
  
  
  
  fruits: Array<string> = ['Apple', 'Orange', 'Banana']
  foo: string | number = 'foos';

  values: (string|number)[] = ['Apple', 2, 'orange', 3];

  getItem = (item: number | undefined) => {
    if (!item) {
      return null;
    } 
    return item.toString();
  }

  doSomenthing =  (): void =>{
    console.log('doing.......');
  }

  clearCache(): void{
    this.title = "new tittle";
  }

  vAny: any = 10;
  vUnknown: unknown = 10;

  s1: string = this.vAny;
  s2: string = this.vUnknown as string;

  // console.log(vAny.foo());
  // console.log(vUnknown.foo());
  // elvis operator
  getName = (user?: UserInterface): string =>{
    return user?.name ?? 'Not Set';
  }

  //Generics
  addId = <T>(obj: T) =>{
    const id = Math.random().toString(16);
    return{
      ...obj,
      id,
    };
  }

  result = this.addId(user);
  
  

}

const user = {
  name: 'Jack',

}

