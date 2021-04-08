import React, { useContext } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import {CartContext} from '../Global/CartContext'


const Cart=()=>{
    const {shoppingCart,totalPrice,quantity,dispatch}=useContext(CartContext)
   
    return(
        <div id='customContainerCart'>
         <div id="cartHeading"><h3>Your Shopping Cart</h3></div>
         {shoppingCart.length>0? 
          shoppingCart.map((cart)=>(
              <div  id='cart-product-container'>
               <div><img src={cart.img} alt='product-img'/></div>
               <div id='cart-product-name'><h4>Product Name : {cart.name}</h4></div>
               <div id='cart-product-price'><h4>Product Price : ${cart.price}.00</h4></div>
               <div id='cart-product-price'><h4>Product Quantity :{cart.quantity}</h4></div>
               <div><span><i className="fas fa-plus" id='plus'></i></span>
               <span><i className="fas fa-minus" id='plus2'></i></span></div>
               <div id='cart-product-total-price'><h4>Total Price :${cart.quantity*cart.price}.00</h4></div>
               <span id='trush'> <i className="fas fa-trash"></i></span> 
              </div>
          ))
          : 'Currently Your Cart is Empty'}

          {shoppingCart.length>0 && <div>
              <h3 className='py-3'>Shopping Summery</h3>
              <hr></hr>
              <h4 id='pay-item'>Total Items: {quantity}</h4>
              <h4  id='pay-item'>Total Price: ${totalPrice}.00</h4>
              <div id='stripe-section'>
              <StripeCheckout 
           pk_test_HnF0cQhq9UGw2GvWRltNiAQM00kn9HlRCg
           stripeKey='pk_test_51ITpDVLiXRZbyrOF45uQsF3D6BgBGYpKouv4c5vV3WPX42yhkHo8zYdO6FFPnVeyyRIOLmMOYpmvgSZ41Kno0WC000hzAtqX2Q'
        //    token={handleToken}
           billingAddress
           shippingAddress
           amount={totalPrice*100}
           name='All Products'   
           >
           </StripeCheckout>
              </div>
          </div>}
        </div>
    )
}

export default Cart