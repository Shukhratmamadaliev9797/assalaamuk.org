import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Title from "../components/Title";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, success } = userSignIn;

  useEffect(() => {
    if (userInfo) {
      setFirstName(userInfo.data.firstName);
      setLastName(userInfo.data.lastName);
      setEmail(userInfo.data.email);
      setPhone(userInfo.data.phone);
      setAddress(userInfo.data.address);
    }
  }, [userInfo]);
  return (
    <div className="profile">
      <div className="profile__container">
        <Title>Profile</Title>
        <div className="profile__content">
          <div className="profile__menu">
            <ul>
              <li className="profile__menu-active">
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/donation-history">Donation History</Link>
              </li>
              <li>Log Out</li>
            </ul>
          </div>
          <div className="profile__main">
            <div className="profile__profile">
              <div className="profile__profile-title">
                <h2>
                  Account <span>Details</span>
                </h2>
              </div>
              <div className="profile__info">
                <div className="profile__info-inputBox">
                  <div>
                    <label>First Name</label>
                    <input
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label>Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="profile__info-inputBox">
                  <div>
                    <label>Email</label>
                    <input
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="profile__info-inputBoxFull">
                  <div>
                    <label>Address</label>
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="profile__info-inputBox">
                  <div>
                    <label>New Password</label>
                    <input
                      type="password"
                      placeholder="New Password"
                      value={newPassword}
                      onChange={(e) => {
                        setNewPassword(e.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <label>Confirm Password</label>
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmNewPassword}
                      onChange={(e) => {
                        setConfirmNewPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="profile__info-buttonBox">
                  <div>
                    <button type="submit">Update Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
