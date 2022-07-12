import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActivity } from "../actions/activityActions";
import { useHistory } from "react-router-dom";
import { addToCart } from "../actions/cartActions";
import CartAdded from "../modals/CartAdded";

export default function QuickDonate(props) {
  const [type, setType] = useState("");
  const [amount, setAmount] = useState();
  const [id, setId] = useState();
  const [addedCart, setAddedCart] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const activityLists = useSelector((state) => state.activityLists);
  const {
    loading: listLoading,
    error: listError,
    activityList,
  } = activityLists;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(listActivity());

    if (cartItems) {
      setId(cartItems.length);
    }
  }, [dispatch, cartItems]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToCart(id, type, amount));
    setAddedCart(true);
  };

  return (
    <>
      {addedCart ? (
        <CartAdded
          returnList={() => {
            setAddedCart(false);
            history.push("/projects");
          }}
          goToCart={() => {
            setAddedCart(false);
            history.push("/basket");
          }}
          closeModal={() => setAddedCart(false)}
        />
      ) : (
        ""
      )}
      <div className="quickDonate">
        <form className="quickDonate__container" onSubmit={submitHandler}>
          <div className="quickDonate__title">Donate Here Quickly</div>
          <div className="quickDonate__type">
            <label>Donation type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {listLoading ? (
                <option>Loading</option>
              ) : listError ? (
                listError
              ) : (
                activityList.map((activity) => {
                  return (
                    <option key={activity._id} value={activity.title}>
                      {activity.title}
                    </option>
                  );
                })
              )}
            </select>
          </div>
          <div className="quickDonate__amount">
            <label>Amount</label>
            <input
              type="number"
              placeholder="5£ min"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="quickDonate__submit">
            <button type="submit">
              <i className="fa-solid fa-hand-holding-heart"></i> Donate Now
            </button>
          </div>
          <div id="google_translate_element"></div>
        </form>
      </div>
    </>
  );
}
