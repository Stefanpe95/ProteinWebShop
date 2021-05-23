import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import {MessengerService} from 'src/app/services/messenger.service'
import { OrderComponent } from '../../order/order.component';
 
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

public cartItems:CartItem[]=[];
public cartTotal=0;

  constructor(private msg:MessengerService,
              private cartService:CartService ,
              public dialog: MatDialog) {
               }

  ngOnInit(): void {
    this.handleSubsription();
    this.loadCartItems();

  }

  handleSubsription(){
    this.msg.getMsg().subscribe(() =>{
    
    this.loadCartItems();

    })
  }

  loadCartItems(){
  this.cartService.getCartItemsFromCart().subscribe((items)=>{
    this.cartItems=items;
    this.cartTotal=this.cartService.calcCartTotal(this.cartItems);

  })
  }


  openDialogPopup(): void {
    const dialogRef = this.dialog.open(OrderComponent, {
      width: '500px',
      height: '500px'
    });


}

}


