import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listActivity } from "../actions/activityActions";
import { Link } from "react-router-dom";
import Title from "./Title";
export default function Activities() {
  const [activity, setActivity] = useState();

  const dispatch = useDispatch();
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

  return (
    <div className="activitiesComponent">
      <div className="activitiesComponent__container">
        <Title>Activities</Title>
        <ul className="activitiesComponent__categories">
          {listLoading
            ? "Loading"
            : listError
            ? listError
            : activityList.map((activity) => {
                return (
                  <li key={activity._id} onClick={() => findActivity(activity)}>
                    <i
                      className={`activitiesComponent__categories-icon  ${activity.icon}`}
                    ></i>
                    <hr />
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
                <button>Donate</button>
              </div>
            </div>
            <div className="activitiesComponent__activity-image">
              <img src={activity?.image} alt={activity?.title} />
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
                    <button>Donate</button>
                  </div>
                </div>
                <div className="activitiesComponent__activity-image">
                  <img
                    src={activityList[0]?.image}
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
