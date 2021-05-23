import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'
import {CartService} from 'src/app/services/cart.service'
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


 @Input() productItem: Product
 @Input() addedToWishlist: boolean


  constructor(private msg: MessengerService,
              private cartService: CartService,
              private wishListService: WishlistService) { }

  ngOnInit(): void {
    this.wishListService.isProductFavorite(this.productItem.id).subscribe((obj)=>{
      if(obj == undefined)
      this.addedToWishlist= false;
      else this.addedToWishlist = true;
    });
  }


  handleAddToCart(){
    this.cartService.getCartItemsofProduct(this.productItem.id).subscribe((cartItem)=>{
      console.log(cartItem);
        if(cartItem.length>0) this.cartService.updateCartItem(cartItem[0],this.productItem).subscribe();
        else {this.cartService.addCartItem(this.productItem).subscribe();}
       this.msg.sendMsg(this.productItem);
        console.log(this.productItem.name);
    });

  }

  handleAddToWishlist(){
    this.wishListService.addToWishlist(this.productItem.id).subscribe(()=>{
        this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist(){
    this.wishListService.removeFromWishlist(this.productItem.id).subscribe(()=>{
      this.addedToWishlist = false;
    })
  }

}
