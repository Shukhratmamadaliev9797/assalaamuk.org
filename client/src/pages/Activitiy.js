import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { detailsActivity, listActivity } from "../actions/activityActions";
import Footer from "../components/Footer";
import MainLoader from "../components/MainLoader";

export default function Activitiy() {
  const activityId = useParams();
  const dispatch = useDispatch();

  const activityDetails = useSelector((state) => state.activityDetails);
  const { loading, error, activity } = activityDetails;

  const activityLists = useSelector((state) => state.activityLists);
  const {
    loading: listLoading,
    error: listError,
    activityList,
  } = activityLists;

  useEffect(() => {
    dispatch(detailsActivity(activityId.id));
    dispatch(listActivity());
  }, [dispatch, activityId.id]);

  return (
    <div>
      {loading ? (
        <MainLoader />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="activityPage__container">
          <div className="activityPage__header">
            <div className="activityPage__header-content">
              <div className="activityPage__header-content-left">
                <h1>
                  Activity <i class="fa-solid fa-circle-play"></i>{" "}
                  <span>{activity.title}</span>
                </h1>
              </div>
              <div className="activityPage__header-content-right"></div>
            </div>
          </div>
          <div className="activityPage__main">
            <div className="activityPage__main-left">
              <div className="activityPage__main-left-mainImg">
                <img src="../images/modal/login.jpeg" alt={activity.title} />
              </div>
              <div className="activityPage__main-left-block">
                {activity.subtitle1 ? <h3>{activity.subtitle1}</h3> : ""}
                <p>{activity.paragraph1}</p>
                <img src="../images/modal/login.jpeg" alt={activity.title} />
              </div>
              <div className="activityPage__main-left-block">
                {activity.subtitle2 ? <h3>{activity.subtitle2}</h3> : ""}
                <p>{activity.paragraph2}</p>
                {activity.image2 ? (
                  <img src={activity.image2} alt={activity.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="activityPage__main-left-block">
                {activity.subtitle3 ? <h3>{activity.subtitle3}</h3> : ""}
                <p>{activity.paragraph3}</p>
                {activity.image3 ? (
                  <img src={activity.image3} alt={activity.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="activityPage__main-left-block">
                {activity.subtitle4 ? <h3>{activity.subtitle4}</h3> : ""}
                <p>{activity.paragraph4}</p>
                {activity.image4 ? (
                  <img src={activity.image4} alt={activity.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="activityPage__main-left-block">
                {activity.subtitle5 ? <h3>{activity.subtitle5}</h3> : ""}
                <p>{activity.paragraph5}</p>
                {activity.image5 ? (
                  <img src={activity.image5} alt={activity.title} />
                ) : (
                  ""
                )}
              </div>
              <div className="activityPage__main-left-block">
                {activity.subtitle6 ? <h3>{activity.subtitle6}</h3> : ""}
                <p>{activity.paragraph6}</p>
                {activity.image6 ? (
                  <img src={activity.image6} alt={activity.title} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="activityPage__main-right">
              <h5>Other Activities</h5>
              {listLoading ? (
                "loading"
              ) : listError ? (
                listError
              ) : (
                <ul>
                  {activityList.map((activity) => {
                    return (
                      <li key={activity._id}>
                        <Link to={`/activity/${activity._id}`}>
                          <h6>{activity.title}</h6>
                          {/* <img
                            src="../images/modal/login.jpeg"
                            alt={activity.title}
                          /> */}
                          <p>{activity.paragraph1.substring(0, 100)}</p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
