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


export const ProductsContext=createContext()


const ProductsContextProvider=(props)=>{
   const [offersProducts]= useState([
        {id:1,name:'Tomato',price:'30',img:tomato},
        {id:2,name:'Onion',price:'40',img:onion},
        {id:3,name:'Garlic',price:'100',img:garlic},
        {id:4,name:'Cucumber',price:'60',img:cucumber},
        {id:5,name:'Capsicum',price:'130',img:capsicum},
        {id:6,name:'Chili',price:'80',img:chili},
        {id:7,name:'Milk',price:'90',img:milk},
        {id:8,name:'Apple',price:'130',img:apple},
        {id:9,name:'Orange',price:'135',img:orange},
        {id:10,name:'Oil',price:'110',img:oil},
    ])

  return(
      <ProductsContext.Provider value={{offersProducts: [...offersProducts]}}>
         {props.children}
      </ProductsContext.Provider>
  )
}

export default ProductsContextProvider

