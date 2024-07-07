import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { IProducts } from './interfaces/products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _endpoint: string = environment .endPoint;
  private apiUrl: string = this._endpoint + 'Products/';

  constructor(private _http: HttpClient) { }

  getProducts(): Observable<IProducts[]>{
    return this._http.get<IProducts[]>(`${this.apiUrl}listarProductos`);
  }

  getProductsByCategory(categoryId: number): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(`${this.apiUrl}getProductByCategory/${categoryId}`);
  }
}
