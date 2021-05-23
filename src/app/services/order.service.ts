import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import { Order } from '../models/order';
import {ordersUrl} from 'src/app/config/api'

@Injectable({
  providedIn: 'root'
})

export class OrderService {

    orders: Order[]
    largestID: number=0


  constructor(private http: HttpClient) { 
      this.getOrders().subscribe((ord : Order[]) =>{ 
        
        this.orders = ord
        ord.forEach(element=>{
          if(element.id> this.largestID) this.largestID = element.id;
        })
      });
      
  }

  getOrders(): Observable<Order[]>{
   return this.http.get<Order[]>(ordersUrl);
  }

  getProduct(id: number):Observable<Order>{
    return this.http.get<Order>(ordersUrl + '/' + id);
  }

  generateOrder(order: Order): Observable<any>{
      order.id = this.generateID();
      order.time = new Date();
      return this.http.post(ordersUrl,order);
    }
  

  generateID():number{
      this.largestID++;
      return this.largestID;
    }


}