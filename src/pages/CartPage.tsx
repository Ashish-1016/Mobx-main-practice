import { observer } from "mobx-react";
import { Component } from "react";
import { StoreContext } from "../AppContextProvider";
import { ICart } from "../typings";
import ProductCard from "../components/ProductCard";

class CartPage extends Component {
 
    static contextType = StoreContext
    // componentDidMount(): void {
    //     // console.log("CartPage",JSON.stringify(this.context?.cartStore?.Cart))

    // }

    render() {

      const {Cart} = this.context?.cartStore
      console.log("CartPage-Cart",JSON.stringify(this.context?.cartStore?.Cart))

      return (
        <section className="flex flex-col items-center">
          <h1 className="text-xl font-semibold">Cart Page</h1>
          <section className="h-[80vh] w-[80vw] border border-gray-500 rounded-md overflow-scroll">
          {
          Cart.map((prod:ICart)=>{
            return (
              <ProductCard key={prod.id} product={prod} hasAddButton={false} />
            )
          })
          }
          </section>
        </section>
      )
    }
}
export default observer(CartPage)