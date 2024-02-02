import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CartProduct } from '../interfaces/cart-product.model';
import { Product } from '../interfaces/product.model';
import { ApiResponse } from '../interfaces/api-remove-response.model';
import { SaleModel } from '../interfaces/sale-model';
import { Order } from '../interfaces/order.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public cardAddedSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(
      'https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts',
    );
  }

  addToCart(obj: Order): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('https://onlinetestapi.gerasim.in/api/Ecomm/AddToCart', obj);
  }

  getCartItemsByCustId(customerId: number): Observable<ApiResponse<CartProduct[]>> {
    return this.http.get<ApiResponse<CartProduct[]>>(
      'https://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id=' + customerId,
    );
  }

  removeCartItemById(cartId: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      'https://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id=' + cartId,
    );
  }

  makeSale(obj: SaleModel): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      'https://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale',
      obj,
    );
  }
}
