import React from "react";
import { Link } from "react-router-dom";

export default function CartAdded(props) {
  return (
    <div className="cartAdded">
      <div className="cartAdded__box">
        <div className="cartAdded__box-exit">
          <i onClick={props.closeModal} class="fa-solid fa-xmark"></i>
        </div>
        <div className="cartAdded__box-icon">
          <i className="fa-solid fa-heart-circle-plus"></i>
        </div>
        <div className="cartAdded__box-title">
          <h1>Donation to your card Added</h1>
        </div>
        <div className="cartAdded__box-paragraph">
          <p>
            Your donation has been added to your card. You can proceed to the
            payment process
          </p>
        </div>
        <div className="cartAdded__box-action">
          <button onClick={props.returnList}>Return to list</button>
          <button onClick={props.goToCart}>Go to Card</button>
        </div>
      </div>
    </div>
  );
}
