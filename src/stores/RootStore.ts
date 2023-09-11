import {ProductStore} from "./ProductStore.ts";
import {CartStore} from "./CartStore.ts";
import { RouterStore} from "mobx-state-router"
import { notFound, routes } from "../routerConfig/initRouter.ts";


export default class  RootStore {

    productStore: ProductStore
    cartStore:CartStore
    routerStore:RouterStore

    constructor() {
        this.productStore=new ProductStore(this)
        this.cartStore=new CartStore()
        this.routerStore= new RouterStore(routes,notFound,{
            root:this,
        })
    }

}