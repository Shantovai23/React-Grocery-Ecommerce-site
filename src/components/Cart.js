import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout";
import { CartContext } from "../Global/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
toast.configure();
const Cart = () => {
  const { shoppingCart, totalPrice, quantity, dispatch } = useContext(
    CartContext
  );
  console.log(shoppingCart);

  return (
    <div id="customContainerCart">
      <div id="cartHeading">
        <h3>Your Shopping Cart</h3>
      </div>
      {shoppingCart.length > 0
        ? shoppingCart.map((cart) => (
            <div id="cart-product-container">
              <div>
                <img src={cart.img} alt="product-img" />
              </div>
              <div id="cart-product-name">
                <h4>Product Name : {cart.name}</h4>
              </div>
              <div id="cart-product-price">
                <h4>Product Price : ${cart.price}.00</h4>
              </div>
              <div id="cart-product-price">
                <h4>Product Quantity :{cart.quantity}</h4>
              </div>
              <div>
                <span
                  onClick={() => dispatch({ type: "INC", id: cart.id, cart })}
                >
                  <i className="fas fa-plus" id="plus"></i>
                </span>
                <span
                  onClick={() => dispatch({ type: "DEC", id: cart.id, cart })}
                >
                  <i className="fas fa-minus" id="plus2"></i>
                </span>
              </div>
              <div id="cart-product-total-price">
                <h4>Total Price :${cart.quantity * cart.price}.00</h4>
              </div>
              <span
                id="trush"
                onClick={() => {dispatch({ type: "DELETE", id: cart.id, cart });
                
                toast.error(`${cart.name}  Deleted`, {
                        position: toast.POSITION.TOP_RIGHT,
                        transition:Zoom,  
                        autoClose:2000  
                      });
                 } }
              >
                <i className="fas fa-trash"></i>
              </span>
            </div>
          ))
        : <div><h4 className='py-5 text-center'>Currently Your Cart is Empty</h4></div>}

      {shoppingCart.length > 0 && (
        <div>
          <h3 className="py-3">Shopping Summery</h3>
          <hr></hr>
          <h4 id="pay-item">Total Items: {quantity}</h4>
          <h4 id="pay-item">Total Shopping Price: ${totalPrice}.00</h4>
          <div id="stripe-section">
            <StripeCheckout
              pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg
              stripeKey="pk_test_51ITpDVLiXRZbyrOF45uQsF3D6BgBGYpKouv4c5vV3WPX42yhkHo8zYdO6FFPnVeyyRIOLmMOYpmvgSZ41Kno0WC000hzAtqX2Q"
              //    token={handleToken}
              billingAddress
              shippingAddress
              amount={totalPrice * 100}
              name="All Products"
            ></StripeCheckout>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
