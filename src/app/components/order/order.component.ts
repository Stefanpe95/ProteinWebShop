import { Component, OnInit } from '@angular/core';
import {  MatDialogRef } from '@angular/material/dialog';
import { Order } from 'src/app/models/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  public order: Order
  public isFinished: boolean=false;

  constructor(public dialogRef: MatDialogRef<OrderComponent>,
    public cartService:CartService,
    public orderService:OrderService) {
    this.populateOrder();
   }

  ngOnInit(): void {
    
  }


  populateOrder(){
    this.cartService.getCartItemsFromCart().subscribe((items)=>{
      this.order = new Order();
      this.order.CartItemsList = items;
      this.order.total = this.cartService.calcCartTotal(this.order.CartItemsList); 
    })
  }

  createOrder(){
    this.orderService.generateOrder(this.order).subscribe(() =>{
      this.cartService.emptyCart(this.order.CartItemsList);
      this.isFinished=true;
    })

  }

  closeOrder(){
  window.location.reload();
  }

}
