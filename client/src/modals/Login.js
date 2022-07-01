import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn } from "../actions/userActions";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepSigned, setKeepSigned] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignIn;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(email, password, keepSigned));
  };

  useEffect(() => {
    if (userInfo) {
      console.log(userInfo);
      if (userInfo.data.isAdmin === true) {
        history.push("/admin");
      }
    }
  }, [history, userInfo]);

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__img">
          <h1>
            Not a <span>member</span> yet?
          </h1>
          <p>
            Scholarship for the monthly training costs and you can grow hafiz
          </p>
          <button onClick={props.switchModal}>
            Register <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <form className="login__form" onSubmit={submitHandler}>
          <div className="login__exit" onClick={props.closeModal}>
            <i class="fa-solid fa-square-xmark"></i>
          </div>
          <div className="login__form-icon">
            <i class="fa-solid fa-user-large"></i>
          </div>
          <div className="login__form-title">
            <h1>Log In</h1>
          </div>
          {error ? error : ""}
          <div className="login__form-input">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__form-input">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login__form-checkbox">
            <input
              type="checkbox"
              onChange={(e) => setKeepSigned(e.target.checked)}
            />
            <label>Keep me signed in</label>
          </div>
          <div className="login__form-submit">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
