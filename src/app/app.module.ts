import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'
import {NgxPaginationModule} from 'ngx-pagination';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './components/shopping-cart/product-list/product-list.component';
import { CartComponent } from './components/shopping-cart/cart/cart.component';
import { CartItemComponent } from './components/shopping-cart/cart/cart-item/cart-item.component';
import {ProductItemComponent} from './components/shopping-cart/product-list/product-item/product-item.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import { OrderComponent } from './components/order/order.component';

import { CartService } from './services/cart.service';
import { MessengerService } from './services/messenger.service';
import { ProductService } from './services/product.service';
import { WishlistService } from './services/wishlist.service';
import { OrderService } from './services/order.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    PageNotFoundComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [OrderComponent],
  providers: [CartService,
              MessengerService,
              ProductService,
              WishlistService,
              OrderService
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
