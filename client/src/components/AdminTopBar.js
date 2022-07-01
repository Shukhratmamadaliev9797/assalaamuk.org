import React from "react";
import { useSelector } from "react-redux";

export default function AdminTopBar() {
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  return (
    <div className="adminTopBar">
      <div className="adminTopBar__container">
        <div>Admin Dashboard</div>
        <div>Welcome back, {userInfo.data.firstName}</div>
      </div>
    </div>
  );
}
