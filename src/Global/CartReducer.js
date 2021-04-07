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
      default:
        return state;
    }
  };
  