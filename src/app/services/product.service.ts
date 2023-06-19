import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/products/product';

interface IResponse {
  products: IProduct[]
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }
  private httpUtl: string = "https://dummyjson.com/products";
  getProducts(): Observable<IResponse> {
    return this.http.get<IResponse>(this.httpUtl).pipe(
      tap(data => console.log(data)),
      catchError(err => { throw err })
    )
  }
}
