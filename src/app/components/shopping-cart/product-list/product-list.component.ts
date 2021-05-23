import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from 'src/app/services/product.service'
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  productList: Product[]=[]
  wishlist: any[]=[]

  page = 1;
  count = 0;
  pageSize = 6;
  pageSizes = [6, 12, 18];


  constructor(private productService: ProductService
              ,private wishlistService: WishlistService) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishlist();
  }

  loadProducts(){
    
    this.productService.getProducts().subscribe((products)=>{
    this.productList= products;
     
    })
  }

  loadWishlist(){
    
    this.wishlistService.getWishlist().subscribe(productIds =>{
    this.wishlist = productIds;
    
  })
  }


  getRequestParams(page: number, pageSize: number): any {
    let params: any = {};

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.productService.getProducts();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.productService.getProducts();
  }

}
