import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { listActivity } from "../actions/activityActions";
import { listProject } from "../actions/projectAction";
import Login from "../modals/Login";
import Register from "../modals/Register";

export default function Navbar() {
  const dispatch = useDispatch();
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, success } = userSignIn;

  const activityLists = useSelector((state) => state.activityLists);
  const {
    loading: listLoading,
    error: listError,
    activityList,
  } = activityLists;
  const projectLists = useSelector((state) => state.projectLists);
  const {
    loading: listLoadingProject,
    error: listErrorProject,
    projectList,
  } = projectLists;
  const userRegister = useSelector((state) => state.userRegister);
  const { success: successRegister } = userRegister;
  useEffect(() => {
    if (success) {
      setLoginModal(false);
    }
    if (successRegister) {
      setRegisterModal(false);
    }
    dispatch(listActivity());
    dispatch(listProject());
  }, [success, successRegister, dispatch]);

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
          <ul className="navbar__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li className="navbar__activities">
              <Link to="#activities">Activities</Link>
              <ul className="navbar__hover">
                {listLoading
                  ? "loading..."
                  : listError
                  ? listError
                  : activityList.map((activity) => {
                      return (
                        <li key={activity._id}>
                          <Link to={`/activity/${activity._id}`}>
                            {activity.title}
                          </Link>
                        </li>
                      );
                    })}
              </ul>
            </li>
            <li className="navbar__projects">
              <Link to="/projects">Projects</Link>
              <ul className="navbar__hover">
                {listLoadingProject
                  ? "loading..."
                  : listErrorProject
                  ? listErrorProject
                  : projectList.map((project) => {
                      return (
                        <li key={project._id}>
                          <Link to={`/project/${project._id}`}>
                            {project.title}
                          </Link>
                        </li>
                      );
                    })}
              </ul>
            </li>
            <li className="navbar__logo">
              <Link to="/">
                <span>As-Salaam</span>
                <span>UK Foundation</span>
              </Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            {userInfo ? (
              <li className="navbar__user">
                <Link to="/">{userInfo.data.firstName}</Link>
                <ul className="navbar__userHover">
                  <li>
                    <Link to="/profile">Account</Link>
                  </li>
                  {userInfo.data.isAdmin ? (
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                  ) : (
                    ""
                  )}
                  <li>
                    <Link to="/">Donation History</Link>
                  </li>
                  <li>Log Out</li>
                </ul>
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
