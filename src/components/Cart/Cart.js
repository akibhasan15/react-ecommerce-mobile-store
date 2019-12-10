import React, { Component } from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import EmprtyCart from "./EmptyCart";
import { ProductConsumer } from "../Context";
import Cartlist from './CartList';
import CartTotal from './CartTotal';

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <CartColumn />
                  <Cartlist value={value} />
                  <CartTotal value={value}/>
                </React.Fragment>
              );
            }
            else{
                return <EmprtyCart/>
              
            }
          }}
         
        </ProductConsumer>

      </section>
    );
  }
}
