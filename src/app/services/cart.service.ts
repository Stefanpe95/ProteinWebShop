import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  cartItems: CartItem[]
  largestID: number = 0

  
  constructor(private http: HttpClient) { 
    
    this.getCartItems().subscribe((items: CartItem[])=>{
      this.cartItems=items;
      items.forEach(element => {
        if(element.id> this.largestID) this.largestID = element.id;
      });
    
    });
    
  }

  getCartItems(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl);
  }

  getCartItemsFromCart(): Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl + '?inCart=true');
  }

  generateID():number{
   return this.largestID++;
  }

  getCartItemsofProduct(productId:number):Observable<CartItem[]>{
    return this.http.get<CartItem[]>(cartUrl + '?productId='+productId+"&inCart=true");
  }

  addCartItem(product:Product): Observable<CartItem>{
    this.largestID++;
    var localNewCartItem=new CartItem(this.largestID,product,1);
    return this.http.post<CartItem>(cartUrl,localNewCartItem);

  }
  
  emptyCart(items: CartItem[]){
      items.forEach(item => {
        item.inCart = false;
        this.http.put<CartItem>(cartUrl+'/'+item.id, item).subscribe();
      });
  }

  updateCartItem(item:CartItem,product:Product){
      item.qty++;
      item.price = item.price + product.price;

     return this.http.put<CartItem>(cartUrl+'/'+item.id,item)

  }

  calcCartTotal(cartItems:CartItem[]) : number{
    var cartTotal=0

    cartItems.forEach((item: { qty: number; price: number; }) =>{
      cartTotal += (item.qty* item.price)
    })

    return cartTotal;
  }

}
