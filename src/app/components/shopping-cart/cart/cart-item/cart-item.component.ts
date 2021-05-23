import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItem
  @Input() isParentCart: boolean
  
  product:Product

  constructor(private productService : ProductService) { 
   
  }

  ngOnInit(): void {
    this.productService.getProduct(this.cartItem.productId).subscribe((prod : Product) => {
      this.product = prod;
    });
  }

}


