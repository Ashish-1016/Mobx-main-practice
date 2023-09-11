
export interface IProduct {
    id:number,
    title:string,
    description:string,
    price:number,
    category:number
    thumbnail:string
}

export interface ICartStore{
    product:ICart,
    quantity:number
}

export interface ICart {
    id:number,
    title:string,
    description:string,
    price:number,
    category:number
    thumbnail:string
}

export interface IResponseData {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}