import { Component } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../AppContextProvider";
import { IProduct } from "../typings";
import ProductCard from "../components/ProductCard";

class HomePage extends Component {
  static contextType = StoreContext;

  componentDidMount() {
    this.context?.productStore.fetchProducts("https://dummyjson.com/products");
  }

  handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) {
      return alert("Search field can't be empty");
    } else {
      this.context?.productStore.searchProducts(
        `https://dummyjson.com/products/search?q=${query}`
      );
    }
  };

  render() {
    console.log("HomePage-Cart", JSON.stringify(this.context?.cartStore.Cart));
    return (
      <>
        <section className="flex flex-col items-center ">
          <h1 className="text-xl font-semibold">Home Page</h1>
          <section className="h-[80vh] w-[80vw] border border-gray-500 rounded-md overflow-scroll">
            <h1 className="sticky top-0 bg-white w-full border border-black">
              All Products
            </h1>
            <div className="flex m-2">
              <input
                className="border border-black p-1 m-2"
                placeholder="Search.."
              />
              <button
                onClick={handleSearch}
                className="bg-blue-500 p-1 m-1 rounded-md text-white"
              >
                Submit
              </button>
            </div>
            {this.context?.productStore.Products.map((prod: IProduct) => {
              return (
                <ProductCard key={prod.id} product={prod} hasAddButton={true} />
              );
            })}
          </section>
        </section>
      </>
    );
  }
}

export default observer(HomePage);
