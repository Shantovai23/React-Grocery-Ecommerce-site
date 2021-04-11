import React, { useContext } from 'react'

import {ProductsContext} from '../Global/ProductsContext'
import {CartContext} from '../Global/CartContext'



const Clothes=()=>{
    const {cloths}=useContext(ProductsContext)
    const {dispatch}=useContext(CartContext)
    console.log(cloths);
    
    return(<div id="customContainer">
    <div id='grocery-flex'>
     {cloths.map((product)=>(
        <div className="card" style={{ width: "18rem" }} id="grocery-item">
            <img
              className="card-img-top"
              src={product.img}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "600" }}>
                {product.name}
              </h5>
              <h5 className="card-title" style={{ fontWeight: "600" }}>
                ${product.price}.00
              </h5>
              <a
                className="btn btn-primary"
                style={{
                  background: "#DA2267",
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    id: product.id,
                    product: product,
                  });
                 
                //     toast.success(`${product.name}  Added`, {
                //     position: toast.POSITION.TOP_RIGHT,
                //     transition:Zoom,
                //     autoClose:2000
                        
                //   });
                 
                }}
              >
                Add to Cart
              </a>
            </div>
          </div>
     ))}
    </div>
      </div>)
}

export default Clothes