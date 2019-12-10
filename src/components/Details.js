import React, { Component } from "react";
import { ProductConsumer } from "./Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            company,
            img,
            id,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto my-3  text-center text-blue text-slanted">
                  <h4>{title}</h4>
                </div>
                {/* END TITLE */}
              </div>
              <div className="row">
                {/* PRDUCT_IMAGE */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capatalize">
                  <img src={img} className="img-fluid " alt="product"></img>
                </div>
                {/* PRODUCT_INFO */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capatalize">
                  <h2>Model:{title}</h2>
                  <h4 className="text-title text-uppercase mt-3 mb-2">
                    Made by: <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4>
                    Price:<span>$</span> {price}
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-0">
                    Info About Product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>Back to product</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "inCart" : "Add to Cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
