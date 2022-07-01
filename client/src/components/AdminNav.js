import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signout } from "../actions/userActions";

export default function AdminNav() {
  const dispatch = useDispatch();
  const signOutHandler = () => {
    dispatch(signout());
  };

  return (
    <div className="admin">
      <div className="admin__container">
        <div>
          <div className="admin__logo">
            <Link to="/">
              <span>As-Salaam</span>
              <span>UK Foundation</span>
            </Link>
          </div>
          <ul className="admin__menu">
            <li>
              <Link to="/admin">
                <i className="fa-solid fa-house admin-icon"></i> Dashboard
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <i className="fa-solid fa-user admin-icon"></i> Users
              </Link>
            </li>
            <li>
              <Link to="/admin/activities">
                <i className="fa-solid fa-hand-holding-heart admin-icon"></i>{" "}
                Activities
              </Link>
            </li>
            <li>
              <Link to="/admin/projects">
                <i className="fa-solid fa-hand-holding-hand admin-icon"></i>{" "}
                Projects
              </Link>
            </li>
            <li>
              <Link to="/admin/news">
                <i className="fa-solid fa-clipboard-list admin-icon"></i> News
              </Link>
            </li>
            <li>
              <Link to="/admin/setting">
                <i className="fa-solid fa-gear admin-icon"></i> Setting
              </Link>
            </li>
          </ul>
          <div className="admin__logout">
            <button onClick={signOutHandler}>
              Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
