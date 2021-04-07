import React, { useContext } from 'react'

import {CartContext} from '../Global/CartContext'

const Cart=()=>{
    const data=useContext(CartContext)
    console.log(data);
    return(<><h1>Cart</h1></>)
}

export default Cart