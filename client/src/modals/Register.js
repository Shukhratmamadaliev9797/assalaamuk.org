import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [alert, setAlert] = useState(false);

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;
  console.log(userInfo);
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      alert("Password and confirm password are not matched");
    } else if (!acceptTerm) {
      setAlert(true);
    } else {
      dispatch(register(firstName, lastName, email, phone, password));
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__img">
          <h1>Are you Already a member?</h1>
          <p>
            Scholarship for the monthly training costs and you can grow hafiz
          </p>
          <button onClick={props.switchModal}>
            Login <i class="fa-solid fa-arrow-right"></i>
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
            <h1>Register</h1>
          </div>
          <div className="login__form-fullname">
            <div>
              <label>First Name</label>
              <input
                type="text"
                placeholder="First Name"
                required
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                required
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="login__form-input">
            <label>Email address</label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login__form-input">
            <label>Phone number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="login__form-fullname">
            <div>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <label>Password Again</label>
              <input
                type="password"
                placeholder="Confirm Password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          {alert ? (
            <div className="login__alert">
              Please accept term and conditions
            </div>
          ) : (
            ""
          )}

          <div className="login__form-checkbox">
            <input
              type="checkbox"
              onChange={(e) => setAcceptTerm(e.target.checked)}
            />
            <label>I Accept Membership Conditions </label>
          </div>
          <div className="login__form-submit">
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
