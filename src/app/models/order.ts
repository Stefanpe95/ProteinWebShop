import { CartItem } from "./cart-item";

export class Order {
    id: number;
    time: Date;
    total: number;
    CartItemsList: CartItem[];
}

