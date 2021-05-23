import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {wishlistUrl} from 'src/app/config/api'

import {map} from 'rxjs/operators';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }

  getWishlist(): Observable<Product[]>{
    return this.http.get<Product[]>(wishlistUrl).pipe(
      map((result: any[]) => {
        let productIds: any[]=[]

        result.forEach(item => productIds.push(item.id))

        return productIds;
      })
    )
  }

  isProductFavorite(productId:number){
    return this.http.get(wishlistUrl+"/"+productId);
  }
  
  addToWishlist(productId: any) {
    return this.http.post(wishlistUrl, {id:productId})
  }

  removeFromWishlist(productId: any) {
    return this.http.delete(wishlistUrl+'/'+productId)
  }
}
