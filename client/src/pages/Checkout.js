import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DonationProcess from "../components/DonationProcess";
import { render } from "react-dom";
import CreditCardStyle from "../components/CreditCardStyle";
import { Form, Field } from "react-final-form";
import Card from "../components/Card";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
} from "../components/cardUtils";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Login from "../modals/Login";
import Register from "../modals/Register";

export default function Checkout() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  const [paymentStatus, setPaymentStatus] = useState();
  const { cartItems, error } = cart;

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, success } = userSignIn;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const history = useHistory();
  useEffect(() => {
    if (!window.document.getElementById("stripe-script")) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://js.stripe.com/v2/";
      s.onload = () => {
        window["Stripe"].setPublishableKey(
          "pk_test_51LGGq9KfWfVWvrzmRtJbtan5SaRMlRfvyZ9E3W1Ugcm5nM8rzcA89TYImB09OpOU924uHexAfGB6m6rLnO3BvXsQ00ibSacNmo"
        );
      };
      window.document.body.appendChild(s);
    }
    if (paymentStatus === "succeeded") {
      history.push("/paymentSuccess");
    }

    if (!userInfo) {
      setLoginModal(true);
    }
  }, [userInfo, paymentStatus, history]);

  const onSubmit = async (values) => {
    await sleep(300);
    try {
      window.Stripe.card.createToken(
        {
          number: values.number,
          exp_month: values.expiry.split("/")[0],
          exp_year: values.expiry.split("/")[1],
          cvc: values.cvc,
          name: values.name,
        },
        (status, response) => {
          if (status === 200) {
            axios
              .post("/api/payment/stripe-payment", {
                token: response,
                email: userInfo.data.email,
                amount: cartItems.reduce((a, c) => a + Number(c.amount), 0),
              })
              .then((res) => {
                setPaymentStatus(res.data.status);
              })
              .catch((err) => console.log(err));
          } else {
            console.log(response.error.message);
          }
        }
      );
    } catch (error) {}
  };
  return (
    <>
      {loginModal ? (
        <Login
          switchModal={() => {
            setLoginModal(false);
            setRegisterModal(true);
          }}
        />
      ) : (
        ""
      )}
      {registerModal ? (
        <Register
          switchModal={() => {
            setLoginModal(true);
            setRegisterModal(false);
          }}
        />
      ) : (
        ""
      )}
      <div className="checkout">
        <DonationProcess cartStatus="true" checkoutStatus="true" />
        <div className="cart__paragraph">
          With our online donation system, you can perform your help quickly and
          safely and change the lives of thousands of people.
        </div>
        <div className="checkout__container">
          <div className="checkout__summary">
            <div className="checkout__summary-title">
              <h1>
                Donation <span>Summary</span>
              </h1>
            </div>
            <ul className="checkout__summary-items">
              {cartItems.map((item) => {
                return (
                  <li>
                    <span>{item.type}</span>
                    <span>{item.amount} £</span>
                  </li>
                );
              })}
            </ul>
            <div className="cart__totalAmount-display">
              Total Amount :{" "}
              {cartItems.reduce((a, c) => a + Number(c.amount), 0)} £
            </div>
          </div>
          <CreditCardStyle>
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
                active,
              }) => {
                return (
                  <form onSubmit={handleSubmit}>
                    <Card
                      number={values.number || ""}
                      name={values.name || ""}
                      expiry={values.expiry || ""}
                      cvc={values.cvc || ""}
                      focused={active}
                    />
                    <div>
                      <Field
                        name="number"
                        component="input"
                        type="text"
                        pattern="[\d| ]{16,22}"
                        placeholder="Card Number"
                        format={formatCreditCardNumber}
                      />
                    </div>
                    <div>
                      <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <Field
                        name="expiry"
                        component="input"
                        type="text"
                        pattern="\d\d/\d\d"
                        placeholder="Valid Thru"
                        format={formatExpirationDate}
                      />
                      <Field
                        name="cvc"
                        component="input"
                        type="text"
                        pattern="\d{3,4}"
                        placeholder="CVC"
                        format={formatCVC}
                      />
                    </div>
                    <div className="buttons">
                      <button type="submit" disabled={submitting}>
                        Complete Payment
                      </button>
                      <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                      >
                        Reset
                      </button>
                    </div>
                  </form>
                );
              }}
            />
          </CreditCardStyle>
        </div>
      </div>
    </>
  );
}
