import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Login from "../modals/Login";
import Register from "../modals/Register";

export default function Navbar() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, success } = userSignIn;

  const userRegister = useSelector((state) => state.userRegister);
  const { success: successRegister } = userRegister;
  useEffect(() => {
    if (success) {
      setLoginModal(false);
    }
    if (successRegister) {
      setRegisterModal(false);
    }
  }, [success, successRegister]);

  return (
    <>
      {loginModal ? (
        <Login
          closeModal={() => setLoginModal(false)}
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
          closeModal={() => setRegisterModal(false)}
          switchModal={() => {
            setLoginModal(true);
            setRegisterModal(false);
          }}
        />
      ) : (
        ""
      )}
      <div className="navbar">
        <div className="navbar__container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/activities">Activities</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li className="navbar__logo">
              <Link to="/">
                <span>As-Salaam</span>
                <span>UK Foundation</span>
              </Link>
            </li>
            <li>
              <Link to="/monthly-donation">Monthly Donation</Link>
            </li>
            {userInfo ? (
              <li>
                <Link>{userInfo.data.firstName}</Link>
              </li>
            ) : (
              <li className="navbar__login">
                <button onClick={() => setLoginModal(true)}>Login</button>
              </li>
            )}
            <li className="navbar__basket">
              <Link to="/basket">Donation Basket</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
