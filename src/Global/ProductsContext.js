import React,{createContext,useState} from 'react'
import tomato from '../img/tomato.jpg'
import onion from '../img/onion.jpg'
import garlic from '../img/garlic.jpg'
import cucumber from '../img/cucumber.jpg'
import capsicum from '../img/capsicum.jpg'
import chili from '../img/chili.jpg'
import milk from '../img/milk.jpg'
import apple from '../img/apple.jpg'
import orange from '../img/orange.jpg'
import oil from '../img/oil.jpg'

import cloths1 from '../img/cloths1.jpg'
import cloths2 from '../img/cloths2.jpg'
import cloths3 from '../img/cloths3.jpg'
import cloths4 from '../img/cloths4.jpg'
import cloths5 from '../img/cloths5.jpg'
import cloths6 from '../img/cloths6.jpg'
import cloths7 from '../img/cloths7.jpg'
import cloths8 from '../img/cloths8.jpg'
import cloths9 from '../img/cloths9.jpg'
import cloths10 from '../img/cloths10.jpg'
import cloths11 from '../img/cloths11.jpg'
import cloths12 from '../img/cloths12.jpg'
import cloths13 from '../img/cloths13.jpg'

export const ProductsContext=createContext()

const ProductsContextProvider=(props)=>{
   const [offersProducts]= useState([
        {id:1,name:'Tomato',price:30,img:tomato},
        {id:2,name:'Onion',price:40,img:onion},
        {id:3,name:'Garlic',price:100,img:garlic},
        {id:4,name:'Cucumber',price:60,img:cucumber},
        {id:5,name:'Capsicum',price:130,img:capsicum},
        {id:6,name:'Chili',price:80,img:chili},
        {id:7,name:'Milk',price:90,img:milk},
        {id:8,name:'Apple',price:130,img:apple},
        {id:9,name:'Orange',price:135,img:orange},
        {id:10,name:'Oil',price:110,img:oil},
    ])

    const [cloths]= useState([
      {id:11,name:'T-Shirt T1',price:70,img:cloths1},
      {id:12,name:'T-Shirt T2',price:60,img:cloths2},
      {id:13,name:'T-Shirt T3',price:100,img:cloths3},
      {id:14,name:'T-Shirt T4',price:160,img:cloths4},
      {id:15,name:'T-Shirt T5',price:150,img:cloths5},
      {id:16,name:'Ladies Jeans J1',price:280,img:cloths6},
      {id:17,name:'Ladies Jeans J2',price:190,img:cloths7},
      {id:18,name:'Ladies Jeans J3',price:230,img:cloths8},
      {id:19,name:'Ladies Jeans J4',price:135,img:cloths9},
      {id:20,name:'Black Shoes',price:2210,img:cloths10},
      {id:21,name:'Multi Color Shoes',price:1210,img:cloths11},
      {id:22,name:'White Shoes',price:1110,img:cloths12},
      {id:23,name:'Sahri',price:980,img:cloths13},
      {id:23,name:'Sahri',price:980,img:cloths13},
      {id:23,name:'Sahri',price:980,img:cloths13},
  ])

  return(
      <ProductsContext.Provider value={{offersProducts:[...offersProducts],cloths:[...cloths]}}>
         {props.children}
      </ProductsContext.Provider>
  )
}

export default ProductsContextProvider

