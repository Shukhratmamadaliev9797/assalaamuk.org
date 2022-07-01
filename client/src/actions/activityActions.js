import axios from "axios";
import {
  ACTIVITY_CREATE_FAIL,
  ACTIVITY_CREATE_REQUEST,
  ACTIVITY_CREATE_SUCCESS,
  ACTIVITY_DELETE_FAIL,
  ACTIVITY_DELETE_REQUEST,
  ACTIVITY_DELETE_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_UPDATE_FAIL,
  ACTIVITY_UPDATE_REQUEST,
  ACTIVITY_UPDATE_SUCCESS,
} from "../constants/activityConstants";

export const createActivity = (
  title,
  image,
  icon,
  subtitle1,
  paragraph1,
  image1,
  subtitle2,
  paragraph2,
  image2,
  subtitle3,
  paragraph3,
  image3,
  subtitle4,
  paragraph4,
  image4,
  subtitle5,
  paragraph5,
  image5,
  subtitle6,
  paragraph6,
  image6
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTIVITY_CREATE_REQUEST,
      payload: {
        title,
        image,
        icon,
        subtitle1,
        paragraph1,
        image1,
        subtitle2,
        paragraph2,
        image2,
        subtitle3,
        paragraph3,
        image3,
        subtitle4,
        paragraph4,
        image4,
        subtitle5,
        paragraph5,
        image5,
        subtitle6,
        paragraph6,
        image6,
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/activities/createActivity`, {
        title,
        image,
        icon,
        subtitle1,
        paragraph1,
        image1,
        subtitle2,
        paragraph2,
        image2,
        subtitle3,
        paragraph3,
        image3,
        subtitle4,
        paragraph4,
        image4,
        subtitle5,
        paragraph5,
        image5,
        subtitle6,
        paragraph6,
        image6,
      });
      dispatch({ type: ACTIVITY_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ACTIVITY_CREATE_FAIL, payload: message });
    }
  };
};

export const listActivity = () => {
  return async (dispatch) => {
    dispatch({ type: ACTIVITY_LIST_REQUEST });
    try {
      const { data } = await axios.get(`/api/activities`);
      dispatch({ type: ACTIVITY_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: ACTIVITY_LIST_FAIL, payload: error.message });
    }
  };
};

export const deleteActivity = (activityId) => {
  return async (dispatch, getState) => {
    dispatch({ type: ACTIVITY_DELETE_REQUEST, payload: activityId });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/activities/${activityId}`, {
        headers: { Authorization: `Bearer ${userInfo.data.token}` },
      });
      dispatch({ type: ACTIVITY_DELETE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ACTIVITY_DELETE_FAIL, payload: message });
    }
  };
};

export const updateActivity = (
  activityID,
  title,
  image,
  icon,
  subtitle1,
  paragraph1,
  image1,
  subtitle2,
  paragraph2,
  image2,
  subtitle3,
  paragraph3,
  image3,
  subtitle4,
  paragraph4,
  image4,
  subtitle5,
  paragraph5,
  image5,
  subtitle6,
  paragraph6,
  image6
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ACTIVITY_UPDATE_REQUEST,
      payload: {
        title,
        image,
        icon,
        subtitle1,
        paragraph1,
        image1,
        subtitle2,
        paragraph2,
        image2,
        subtitle3,
        paragraph3,
        image3,
        subtitle4,
        paragraph4,
        image4,
        subtitle5,
        paragraph5,
        image5,
        subtitle6,
        paragraph6,
        image6,
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(
        `/api/activities/${activityID}`,
        {
          title,
          image,
          icon,
          subtitle1,
          paragraph1,
          image1,
          subtitle2,
          paragraph2,
          image2,
          subtitle3,
          paragraph3,
          image3,
          subtitle4,
          paragraph4,
          image4,
          subtitle5,
          paragraph5,
          image5,
          subtitle6,
          paragraph6,
          image6,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.data.token}` },
        }
      );
      dispatch({ type: ACTIVITY_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: ACTIVITY_UPDATE_FAIL, payload: message });
    }
  };
};
