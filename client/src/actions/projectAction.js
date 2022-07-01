import axios from "axios";
import {
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
} from "../constants/projectConstants";

export const createProject = (
  title,
  image,
  location,
  category,
  paragraph,
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
  targetAmount,
  currentAmount
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: PROJECT_CREATE_REQUEST,
      payload: {
        title,
        image,
        location,
        category,
        paragraph,
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
        targetAmount,
        currentAmount,
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/projects/createProject`, {
        title,
        image,
        location,
        category,
        paragraph,
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
        targetAmount,
        currentAmount,
      });
      dispatch({ type: PROJECT_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PROJECT_CREATE_FAIL, payload: message });
    }
  };
};

export const listProject = () => {
  return async (dispatch) => {
    dispatch({ type: PROJECT_LIST_REQUEST });
    try {
      const { data } = await axios.get(`/api/projects`);
      dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROJECT_LIST_FAIL, payload: error.message });
    }
  };
};

export const deleteProject = (projectId) => {
  return async (dispatch, getState) => {
    dispatch({ type: PROJECT_DELETE_REQUEST, payload: projectId });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/projects/${projectId}`, {
        headers: { Authorization: `Bearer ${userInfo.data.token}` },
      });
      dispatch({ type: PROJECT_DELETE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PROJECT_DELETE_FAIL, payload: message });
    }
  };
};

export const updateProject = (
  projectID,
  title,
  image,
  location,
  category,
  paragraph,
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
  targetAmount,
  currentAmount
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: PROJECT_UPDATE_REQUEST,
      payload: {
        projectID,
        title,
        image,
        location,
        category,
        paragraph,
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
        targetAmount,
        currentAmount,
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(
        `/api/projects/${projectID}`,
        {
          projectID,
          title,
          image,
          location,
          category,
          paragraph,
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
          targetAmount,
          currentAmount,
        },
        {
          headers: { Authorization: `Bearer ${userInfo.data.token}` },
        }
      );
      dispatch({ type: PROJECT_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: PROJECT_UPDATE_FAIL, payload: message });
    }
  };
};
