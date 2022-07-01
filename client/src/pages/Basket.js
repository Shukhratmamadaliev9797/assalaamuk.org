import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DonationProcess from "../components/DonationProcess";
import { Link } from "react-router-dom";
import { removeFromCart } from "../actions/cartActions";

export default function Basket() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems, error } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <DonationProcess cartStatus="true" />
      <div className="cart__paragraph">
        With our online donation system, you can perform your help quickly and
        safely and change the lives of thousands of people.
      </div>
      <div className="cart__container">
        {cartItems.map((cart) => {
          return (
            <div className="cart__item">
              <div className="cart__item-icon">
                <i class="fa-solid fa-hand-holding-heart"></i>
              </div>
              <div className="cart__item-type">{cart.type}</div>
              <div className="cart__item-amount">{cart.amount} £</div>
              <div className="cart__item-delete">
                <i
                  onClick={() => removeHandler(cart.id)}
                  class="fa-solid fa-circle-xmark"
                ></i>
              </div>
            </div>
          );
        })}
        <div className="cart__totalAmount">
          <div className="cart__totalAmount-display">
            Total Amount : {cartItems.reduce((a, c) => a + Number(c.amount), 0)}{" "}
            £
          </div>
        </div>
        <div className="cart__action">
          <Link>
            <i class="fa-solid fa-arrow-left"></i> Return to Projects
          </Link>
          <Link to="/checkout">
            Procees Payment <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
