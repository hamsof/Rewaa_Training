import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private httpUtl: string = "";
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.httpUtl)
  }
}
