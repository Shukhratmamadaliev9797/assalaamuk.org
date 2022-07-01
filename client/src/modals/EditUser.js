import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../actions/userActions";

export default function EditUser(props) {
  const [userID, setUserID] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.user) {
      setUserID(props.user._id);
      setFirstName(props.user.firstName);
      setLastName(props.user.lastName);
      setEmail(props.user.email);
      setPhone(props.user.phone);
      setAddress(props.user.address);
    }
  }, [props.user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(userID, firstName, lastName, email, phone, address));
  };

  return (
    <div className="editUser">
      <form className="editUser__container" onSubmit={submitHandler}>
        <div className="editUser__container-title">
          <h1>Edit User</h1>
          <i
            onClick={props.closeModal}
            class="editUser__container-exit fa-solid fa-xmark"
          ></i>
        </div>
        <div className="editUser__container-input2">
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="editUser__container-input1">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="editUser__container-input1">
          <label>Phone</label>
          <input
            type="tell"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="editUser__container-input1">
          <label>Address</label>
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="editUser__container-submit">
          <button type="submit">Update User</button>
        </div>
      </form>
    </div>
  );
}
