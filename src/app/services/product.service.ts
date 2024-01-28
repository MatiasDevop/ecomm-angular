import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public cardAddedSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts");
  }

  addToCart(obj: any): Observable<any[]> {
    return this.http.post<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart", obj);
  }
  
  getCartItemsByCustId(customerId: number): Observable<any[]> {
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id="+ customerId)
  }

  removeCartItemById(cartId: number): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id="+ cartId)
  }

  makeSale(obj: any): Observable<any[]> {
    debugger;
    return this.http.post<any[]>("https://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale", obj)
  }

}
