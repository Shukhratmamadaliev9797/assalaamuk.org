import React from "react";

export default function DonationProcess({
  cartStatus,
  checkoutStatus,
  successStatus,
}) {
  return (
    <div className="donationProcess">
      <div className="donationProcess__container">
        <div
          className={`donationProcess__icon ${
            cartStatus
              ? "donationProcess__icon-success"
              : "donationProcess__icon-reject"
          }`}
        >
          <i class="fa-solid fa-heart-circle-plus"></i>
        </div>
        <div className="donationProcess__borderBox">
          <div
            className={`donationProcess__border ${
              checkoutStatus
                ? "donationProcess__border-success"
                : "donationProcess__border-reject"
            }`}
          ></div>
        </div>
        <div
          className={`donationProcess__icon ${
            checkoutStatus
              ? "donationProcess__icon-success"
              : "donationProcess__icon-reject"
          }`}
        >
          <i class="fa-solid fa-heart-circle-bolt"></i>
        </div>
        <div className="donationProcess__borderBox">
          <div
            className={`donationProcess__border ${
              successStatus
                ? "donationProcess__border-success"
                : "donationProcess__border-reject"
            }`}
          ></div>
        </div>

        <div
          className={`donationProcess__icon ${
            successStatus
              ? "donationProcess__icon-success"
              : "donationProcess__icon-reject"
          }`}
        >
          <i class="fa-solid fa-heart-circle-check"></i>
        </div>
      </div>
      <div className="donationProcess__container">
        <div className="donationProcess__text">Donation Basket</div>
        <div className="donationProcess__text">Checkout</div>
        <div className="donationProcess__text">Payment Success</div>
      </div>
    </div>
  );
}
