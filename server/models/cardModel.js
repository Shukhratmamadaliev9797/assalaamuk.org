import mongoose, { Schema } from "mongoose";

const cardSchema = new mongoose.Schema({
  cardType: { type: String, required: true },
  cardName: { type: String, required: true },
  cardNumber: { type: String, required: true },
  cardExpirationDate: { type: String, required: true },
});
