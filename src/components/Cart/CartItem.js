import React from "react";

export default function CartItem({ item, value }) {
  const { increment, decrement, removeItem } = value;
  const { img, id, title, price, total, count } = item;
  return (
    <div className="row my-1 text-caitalize text-center ">
      <div className=" mx-auto col-10 col-lg-2">
        <img className="img-fluid" src={img} alt="pro" />
      </div>
      <div className=" mx-auto col-10 col-lg-2">
        <span className="d-lg-none">Product</span>
        {title}
      </div>
      <div className=" mx-auto col-10 col-lg-2">
        <span className="d-lg-none">Price:$</span>
        ${price}
      </div>
      <div className=" mx-auto col-10 col-lg-2">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* */}
      <div className=" mx-auto col-10 col-lg-2">
        <div className="cart-icon" onClick={()=>{removeItem(id)}}>
          <i className="fa fa-trash"></i>
        </div>
      </div>
      <div className=" mx-auto col-10 col-lg-2">
        <strong>Total: ${total}</strong>
      </div>
    </div>
  );
}
