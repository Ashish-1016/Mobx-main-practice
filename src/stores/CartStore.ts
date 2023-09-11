import {action, makeObservable, observable} from "mobx";
import {ICart, ICartStore} from "../typings.ts";

export class CartStore {
    Cart:ICartStore[]=[]
    constructor() {
        
        makeObservable(this,{
            Cart:observable,
            addToCart:action
        })
    }
    get cartItems(){
        return this.Cart
    }

    addToCart(product:ICart){
        const existingProduct = this.Cart.find(item => item.product.id=== product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
            localStorage.setItem("User's Cart",JSON.stringify(this.Cart))
        } else {
            this.Cart.push({
                product: product,
                quantity: 1,
            });
            localStorage.setItem("User's Cart",JSON.stringify(this.Cart))
        }
    }






}