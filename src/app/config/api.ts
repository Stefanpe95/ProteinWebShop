import {environment} from 'src/environments/environment'

//checking environment and spliting and making Urls from one place only!
export const baseUrl = environment.production ? 'https://api.shoppingcart.com' : 'http://localhost:3000'
export const productsUrl= baseUrl + '/products'
export const cartUrl = baseUrl +'/cart'
export const wishlistUrl = baseUrl + '/wishlist'
export const ordersUrl = baseUrl + '/order'