import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();
const CartContextProvider = (props) => {
  let [cart, dispatch] = useReducer(CartReducer,{shoppingCart:[],totalPrice:0,quantity:0} )
  console.log(cart);
  return (
    <CartContext.Provider value={{...cart,dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

