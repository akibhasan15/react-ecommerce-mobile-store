import React, { Component } from "react";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "./Context";
import styled from "styled-components";
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {value => {
            const { modalOpen, closeModal } = value;
            const { img, title, price } = value.modalProduct;
            if (!modalOpen) {
              return null;
            } else {
              return (
                <ModalContainer>
                  <div className="container">
                    <div className="row">
                      <div
                        id="modal"
                        className="col-6 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                      >
                        <h5>Item Added To The Cart</h5>
                        <img src={img} className="img-fluid" alt="product" />
                        <h5>{title}</h5>
              <h5 className="text-muted">Price:<span>$</span>{price}</h5>
                 <Link to="/"><ButtonContainer cart onClick={()=>{closeModal()}}>
                     continue to shopping
                   </ButtonContainer></Link>
                   <Link to="/Cart"><ButtonContainer onClick={()=>{closeModal()}}>
                     go to cart
                   </ButtonContainer></Link>
                      </div>
                    </div>
                  </div>
                </ModalContainer>
              );
            }
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
