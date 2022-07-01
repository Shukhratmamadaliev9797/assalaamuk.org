import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_REMOVE_ITEM,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (cartItem) =>
          cartItem.type === item.type && cartItem.amount === item.amount
      );
      if (existItem) {
        return {
          ...state,
          error: "",
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.type === existItem.type &&
            cartItem.amount === existItem.amount
              ? item
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          error: "",
          cartItems: [...state.cartItems, item],
          success: true,
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        error: "",
        cartItems: state.cartItems.filter((x) => x.id !== action.payload),
      };

    case CART_EMPTY:
      return { ...state, error: "", cartItems: [] };
    default:
      return state;
  }
};
