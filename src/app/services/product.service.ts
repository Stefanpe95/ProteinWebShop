import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {Product} from '../models/product'
import {HttpClient} from '@angular/common/http'
import {productsUrl} from 'src/app/config/api'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
   return this.http.get<Product[]>(productsUrl);
  }

  getProduct(id: number):Observable<Product>{
    return this.http.get<Product>(productsUrl + '/' + id);
  }
}
