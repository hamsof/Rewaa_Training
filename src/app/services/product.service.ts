import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private httpUtl: string = "/api/products.ts";
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.httpUtl)
  }
}
