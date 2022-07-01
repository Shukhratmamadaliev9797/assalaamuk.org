import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, listUsers } from "../../actions/userActions";
import MainLoader from "../../components/MainLoader";
import {
  USER_DELETE_RESET,
  USER_UPDATE_RESET,
} from "../../constants/userConstants";
import Delete from "../../modals/Delete";
import EditUser from "../../modals/EditUser";
export default function Users() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [user, setUser] = useState();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;
  const userDelete = useSelector((state) => state.userDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = userDelete;

  const userUpdate = useSelector((state) => state.userUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
    if (successDelete) {
      dispatch({ type: USER_DELETE_RESET });
      setDeleteModal(false);
    }
    if (successUpdate) {
      dispatch({ type: USER_UPDATE_RESET });
      setEditModal(false);
    }
  }, [dispatch, successDelete, successUpdate]);

  const userDeleteHandler = (user) => {
    dispatch(deleteUser(user._id));
  };

  return (
    <>
      {deleteModal ? (
        <Delete
          heading="Delete User"
          body="Are you sure to delete user?"
          closeModal={() => setDeleteModal(false)}
          deleteHandler={() => userDeleteHandler(user)}
        />
      ) : (
        ""
      )}
      {editModal ? (
        <EditUser
          user={user}
          closeModal={() => {
            setEditModal(false);
          }}
        />
      ) : (
        ""
      )}

      <div className="adminUsers">
        <div className="adminUsers__container">
          <div className="adminUsers__title">
            <h1>User Information</h1>
          </div>
          <div className="adminUsers__usersBox">
            <table className="adminUsers__table">
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <MainLoader />
                ) : error ? (
                  error
                ) : (
                  users.map((user) => {
                    return (
                      <tr>
                        <td>
                          {user.firstName} {user.lastName}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.address}</td>
                        <td>{user.isAdmin ? "Admin" : "Member"}</td>
                        <td>
                          <i
                            onClick={() => {
                              setEditModal(true);
                              setUser(user);
                            }}
                            class="adminUsers__edit fa-solid fa-pen-to-square"
                          ></i>
                          <i
                            onClick={() => {
                              setDeleteModal(true);
                              setUser(user);
                            }}
                            class="adminUsers__delete fa-solid fa-trash-can"
                          ></i>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
