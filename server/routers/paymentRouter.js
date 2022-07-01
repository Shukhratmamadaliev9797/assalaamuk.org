import express from "express";
import config from "../config.js";
import Stripe from "stripe";
import dotenv from "dotenv";

const paymentRouter = express.Router();

paymentRouter.post("/stripe-payment", (req, res) => {
  const { amount, email, token } = req.body;
  const stripe = new Stripe(config.Stripe, null);

  stripe.customers
    .create({
      email: email,
      source: token.id,
      name: token.card.name,
    })
    .then((customer) => {
      return stripe.charges.create({
        amount: parseFloat(amount) * 100,
        description: `Payment for USD ${amount}`,
        currency: "USD",
        customer: customer.id,
      });
    })
    .then((charge) => res.status(200).send(charge))
    .catch((err) => {
      console.log(err);
    });
});

export default paymentRouter;
