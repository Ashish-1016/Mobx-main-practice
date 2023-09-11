import { IProduct, IResponseData } from "../typings.ts";
import { action, makeObservable, observable, runInAction } from "mobx";
import  RootStore  from "./RootStore.ts";
import { Networking } from "../helpers/Networking.ts";

export class ProductStore {
    Products: IProduct[] = [];
    root: RootStore;
    isFetching: boolean = false;
    networking;

    constructor(root: RootStore) {
        this.root = root;
        this.networking = new Networking();
        makeObservable(this, {
            Products: observable,
            fetchProducts: action,
            searchProducts:action
        });
    }
    async fetchProducts(url: string) {
        if (this.isFetching) {
            return;
        }
        this.isFetching = true;
        try {
            const response: IResponseData | null = await this.networking.get(url);
            if (response) {
                runInAction(() => {
                    this.Products = response.products;
                });

            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            this.isFetching = false;
        }
    }

    async searchProducts(url:string){
        if (this.isFetching) {
            return;
        }
        this.isFetching = true;
        try {
            const response: IResponseData | null = await this.networking.get(url);
            if (response) {
                runInAction(() => {
                    this.Products = response.products;
                });

            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            this.isFetching = false;
        }
    }
}
