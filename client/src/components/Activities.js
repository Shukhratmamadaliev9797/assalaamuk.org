import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActivity } from "../actions/activityActions";
import { Link, useHistory } from "react-router-dom";
import Title from "./Title";
export default function Activities() {
  const [activity, setActivity] = useState();
  const [activityId, setActivityId] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const activityLists = useSelector((state) => state.activityLists);
  const {
    loading: listLoading,
    error: listError,
    activityList,
  } = activityLists;

  useEffect(() => {
    dispatch(listActivity());
  }, [dispatch]);

  const findActivity = (activity) => {
    setActivity(activityList.find((act) => act._id === activity._id));
  };

  const pushProjects = (e) => {
    e.preventDefault();
    history.push("/projects");
  };

  return (
    <div className="activitiesComponent" id="#activities">
      <div className="activitiesComponent__container">
        <Title>Activities</Title>
        <ul className="activitiesComponent__categories">
          {listLoading
            ? "Loading"
            : listError
            ? listError
            : activityList.map((activity) => {
                return (
                  <li
                    className="activitiesComponent__categories-category"
                    key={activity._id}
                    onClick={() => {
                      findActivity(activity);
                      setActivityId(activity._id);
                    }}
                  >
                    <i
                      className={`activitiesComponent__categories-category-icon ${
                        activityId === activity._id
                          ? "activitiesComponent__categories-category-icon-active"
                          : ""
                      }  ${activity.icon}`}
                    ></i>

                    <span>{activity.title}</span>
                  </li>
                );
              })}
        </ul>

        {activity ? (
          <div className="activitiesComponent__activity">
            <div className="activitiesComponent__activity-content">
              <h1>{activity?.title}</h1>
              <p>{activity?.paragraph1.substring(0, 450)}...</p>
              <div className="activitiesComponent__activity-action">
                <Link to={`/activity/${activity?._id}`}>Read More</Link>
                <button onClick={pushProjects}>Donate</button>
              </div>
            </div>
            <div className="activitiesComponent__activity-image">
              <img src="./images/modal/login.jpeg" alt={activity?.title} />
            </div>
          </div>
        ) : (
          <div>
            {listLoading ? (
              "loading"
            ) : listError ? (
              listError
            ) : (
              <div className="activitiesComponent__activity">
                <div className="activitiesComponent__activity-content">
                  <h1>{activityList[0]?.title}</h1>
                  <p>{activityList[0]?.paragraph1}</p>
                  <div className="activitiesComponent__activity-action">
                    <Link to={`/activity/${activityList[0]?._id}`}>
                      Read More...
                    </Link>
                    <button onClick={pushProjects}>Donate</button>
                  </div>
                </div>
                <div className="activitiesComponent__activity-image">
                  <img
                    src="./images/modal/login.jpeg"
                    alt={activityList[0]?.title}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
