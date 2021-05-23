import { Product } from "./product";

export class CartItem {
    id:number;
    productId:number;
    qty: number;
    price: number;
    inCart: boolean;

    constructor(id:number,product: Product,qty = 1, inCart = true){
            this.id=id;
            this.productId=product.id;
            this.price=qty * product.price;
            this.qty=qty;
            this.inCart = inCart;
    }
}
