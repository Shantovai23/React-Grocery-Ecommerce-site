export const CartReducer = (state, action) => {
    let { shoppingCart, totalPrice, quantity } = state
    let product;
    let updatedPrice;
    let updatedQty;
    let index
  
    switch (action.type) {
      case "ADD_TO_CART":
        const check = shoppingCart.find((product) => product.id === action.id);
        if (check) {
          return state;
        } else {
          product = action.product;
          product ["quantity"] = 1;
          updatedQty = quantity + 1;
          updatedPrice = totalPrice + product.price;
          return {
            shoppingCart: [product, ...shoppingCart],
            totalPrice: updatedPrice,
            quantity: updatedQty,
          };
        }
        break;

        case "INC":
          product=action.cart
          product.quantity=product.quantity+1
          updatedPrice=totalPrice+product.price
          updatedQty=quantity+1
          index=shoppingCart.findIndex(cart=>cart.id===action.id)
          shoppingCart[index]=product
          return{shoppingCart:[...shoppingCart],totalPrice:updatedPrice,quantity:updatedQty}

          break;

          case "DEC":
            product=action.cart
            if(product.quantity>1){
              product.quantity=product.quantity-1
              updatedPrice=totalPrice-product.price
             updatedQty=quantity-1
            index=shoppingCart.findIndex(cart=>cart.id===action.id)
            shoppingCart[index]=product
            return{shoppingCart:[...shoppingCart],totalPrice:updatedPrice,quantity:updatedQty}
            }
            else{
              return state
            }
          break;

          case "DELETE":
           const filtered=shoppingCart.filter((product)=>product.id!==action.id)
            product=action.cart
            updatedQty=quantity-product.quantity
            updatedPrice=totalPrice-product.price*product.quantity
            return {shoppingCart:[...filtered],totalPrice:updatedPrice,quantity:updatedQty}
            break

            case 'EMPTY':
              return {shoppingCart: [], totalPrice: 0, message: '', quantity: 0}
      



      default:
        return state;
    }
  };
  