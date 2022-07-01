import React from "react";
import { Link } from "react-router-dom";
import DonationProcess from "../components/DonationProcess";

export default function PaymentSuccess() {
  return (
    <div className="paymentSuccess">
      <DonationProcess
        checkoutStatus="true"
        cartStatus="true"
        successStatus="true"
      />
      <div className="paymentSuccess__container">
        <div className="paymentSuccess__icon">
          <i class="fa-solid fa-hand-holding-heart"></i>
        </div>
        <div className="paymentSuccess__text">
          <h1>
            Thank <span>You</span>
          </h1>
          <p>Your donation was completed successfully</p>
        </div>
        <div className="cart__action">
          <Link>
            <i class="fa-solid fa-arrow-left"></i> Return to Projects
          </Link>
          <Link to="/">
            Go to Home Page <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
