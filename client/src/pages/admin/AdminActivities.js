import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteActivity, listActivity } from "../../actions/activityActions";
import MainLoader from "../../components/MainLoader";
import CreateActivity from "../../modals/CreateActivity";
import Delete from "../../modals/Delete";
import EditActivity from "../../modals/EditActivity";

export default function AdminActivities() {
  const [createActivityModal, setCreateActivityModal] = useState(false);
  const [deleteActivityModal, setDeleteActivityModal] = useState(false);
  const [editActivityModal, setEditActivityModal] = useState(false);

  const [activity, setActivity] = useState();
  const activityCreate = useSelector((state) => state.activityCreate);
  const { loading, error, success } = activityCreate;

  const activityLists = useSelector((state) => state.activityLists);
  const {
    loading: listLoading,
    error: listError,
    activityList,
  } = activityLists;

  const activityDelete = useSelector((state) => state.activityDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = activityDelete;

  const activityUpdate = useSelector((state) => state.activityUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = activityUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listActivity());
    if (success) {
      setCreateActivityModal(false);
    }
    if (successDelete) {
      setDeleteActivityModal(false);
    }
    if (successUpdate) {
      setEditActivityModal(false);
    }
  }, [success, successDelete, dispatch, successUpdate]);

  const activityDeleteHandler = (user) => {
    dispatch(deleteActivity(activity._id));
  };

  return (
    <>
      {createActivityModal ? (
        <CreateActivity
          closeModal={() => {
            setCreateActivityModal(false);
          }}
        />
      ) : (
        ""
      )}
      {deleteActivityModal ? (
        <Delete
          heading="Delete Activity"
          body="Are you sure to delete activity?"
          closeModal={() => setDeleteActivityModal(false)}
          deleteHandler={() => activityDeleteHandler(activity)}
        />
      ) : (
        ""
      )}
      {editActivityModal ? <EditActivity activity={activity} /> : ""}
      <div className="activities">
        <div className="activities__container">
          <div className="activities__title">
            <h1>Activities</h1>
            <button
              onClick={() => {
                setCreateActivityModal(true);
              }}
            >
              Create activity
            </button>
          </div>
          <div className="activities__cards">
            {listLoading ? (
              <MainLoader />
            ) : listError ? (
              <div>{listError}</div>
            ) : (
              activityList.map((activity) => {
                return (
                  <div className="activities__activity">
                    <div className="activities__activity-title">
                      {activity.title.substring(0, 60)}
                    </div>
                    <div className="activities__activity-image">
                      <img src={activity.image} alt={activity.title} />
                    </div>
                    <div className="activities__activity-subtitle">
                      {activity.subtitle1.substring(0, 100)}
                    </div>
                    <div className="activities__activity-paragraph">
                      {activity.paragraph1.substring(0, 300)}
                    </div>
                    <div className="activities__activity-action">
                      <button
                        onClick={() => {
                          setEditActivityModal(true);
                          setActivity(activity);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => {
                          setDeleteActivityModal(true);
                          setActivity(activity);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}
