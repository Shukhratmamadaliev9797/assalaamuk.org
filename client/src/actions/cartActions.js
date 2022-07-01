import axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export function addToCart(id, type, amount) {
  return async (dispatch, getState) => {
    const {
      cart: { cartItems },
    } = getState();

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        id: id,
        type: type,
        amount: amount,
      },
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
}

export const removeFromCart = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: id });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };
};
