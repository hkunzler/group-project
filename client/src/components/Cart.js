import React from "react";
import { withProduct } from "../context/ProductProvider";

const Cart = props => {
  const totalPrice = props.cart.reduce((final, current) => final += current.price ,0)
  const shoppingCart = props.cart.map(item => (
    <div className="cart-flex">
      <div
        style={{
          backgroundImage: `url(${item.imgURL})`,
          width: "300px",
          height: "300px",
          marginTop: "10px",
          backgroundPosition: "center",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          alignItems: 'middle'
        }}
          ></div>
          <h4>{item.itemName}</h4>
          <h3>${item.price}</h3>
    </div>
  ));
    return (
        <div className="cart">
            {shoppingCart}
            <div className="cart-flex">
                <h2>Subtotal</h2>
                
                <h5>${totalPrice}</h5>
            </div>
        </div>)
};

export default withProduct(Cart);
