import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import CartAdded from "../modals/CartAdded";

export default function ProjectDonateForm(props) {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState();
  const [id, setId] = useState();

  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const { cartItems, error, success } = cart;

  useEffect(() => {
    if (cartItems) {
      setId(cartItems.length + 1);
    }
    if (props.project) {
      setType(props.project.title);
    }
    if (success) {
      setType("");
      setAmount("");
      setId("");
    }
  }, [cartItems, props.project, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(addToCart(id, type, amount));
  };

  return (
    <>
      <form
        onSubmit={submitHandler}
        className="projectsComponent__project-donate"
      >
        <input
          type="text"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" onClick={props.addedCart}>
          Donate
        </button>
      </form>
    </>
  );
}
