import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";
const ProductContext = React.createContext();

//Provider
//consumer
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };
  //*!LIFE CYCLE METHOD
  componentDidMount() {
    this.setProducts();
  }
  //*! FUCTION THAT COPY ALL ObJECTS TO THE PRODUCTS STATE
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(item => {
      // console.log(`FOR EACH ITEM:`);
      // console.log(item);
      const singleItem = { ...item };
      // console.log(`FOR SINGLE ITEM`);
      // console.log(singleItem);
      tempProducts = [...tempProducts, singleItem];
      // console.log(`FOR TempProducts :`);
      // console.log(tempProducts);
      this.setState({ products: tempProducts });
    });
  };

  //*!YOU WILL GET THE OBJECT OF THE PRODUCT USING PRODUCT ID
  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  //*! GET THE PRODUCT OBJECT FROM `getItem()` AND SET STATE TO `detailProduct`
  handleDetails = id => {
    const product = this.getItem(id);
    this.setState({ detailProduct: product });
  };
  //*! ADDING SELECTED PRODUCT TO THE CART
  addToCart = id => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];

    //Make the inCart field of the  product(object)
    //true,SO that inCart shows in the Product Component
    product.inCart = true;
    //Make the Count field of the  product(object) to 1
    product.count = 1;
    const price = product.price;
    product.total = price;
    //Now set the state
    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addtotals();
      }
    );

    this.openModal(id);

    console.log(this.state);
  };
  openModal = id => {
    this.setState({ modalProduct: this.getItem(id), modalOpen: true });
    console.log(this.state.modalProduct);
  };
  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count + 1;
    product.total = product.price * product.count;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addtotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    product.total = product.price * product.count;

    if (product.count < 0) {
      this.removeItem(id);
    } else {
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addtotals();
        }
      );
    }
  };
  removeItem = id => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => {
        this.addtotals();
      }
    );
  };
  clearCart = () => {
    this.setState({ cart: [] });
    this.setProducts();
    this.addtotals();
  };
  addtotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    
    const tempTax = subTotal * 0.1;
    const tax=parseFloat(tempTax.toFixed(2))
    const total = tax + subTotal;
    this.setState({
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
