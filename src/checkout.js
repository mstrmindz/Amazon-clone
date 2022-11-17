import React from "react";
import "./Checkout.css";

function checkout() {
  return (
    <div className="Checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>The subtotal will go here</h2>
      </div>
    </div>
  );
}

export default checkout;
