import axios from "axios";
import {
  NEWS_CREATE_FAIL,
  NEWS_CREATE_REQUEST,
  NEWS_CREATE_SUCCESS,
  NEWS_DELETE_FAIL,
  NEWS_DELETE_REQUEST,
  NEWS_DELETE_SUCCESS,
  NEWS_DETAILS_FAIL,
  NEWS_DETAILS_REQUEST,
  NEWS_DETAILS_SUCCESS,
  NEWS_LIST_FAIL,
  NEWS_LIST_REQUEST,
  NEWS_LIST_SUCCESS,
  NEWS_UPDATE_FAIL,
  NEWS_UPDATE_REQUEST,
  NEWS_UPDATE_SUCCESS,
} from "../constants/newsConstants";

export const createNews = (
  title,
  image,
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
  image4
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: NEWS_CREATE_REQUEST,
      payload: {
        title,
        image,
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
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.post(`/api/news/createNews`, {
        title,
        image,
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
      });
      dispatch({ type: NEWS_CREATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: NEWS_CREATE_FAIL, payload: message });
    }
  };
};

export const listNews = () => {
  return async (dispatch) => {
    dispatch({ type: NEWS_LIST_REQUEST });
    try {
      const { data } = await axios.get(`/api/news`);
      dispatch({ type: NEWS_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: NEWS_LIST_FAIL, payload: error.message });
    }
  };
};

export const deleteNews = (newsId) => {
  return async (dispatch, getState) => {
    dispatch({ type: NEWS_DELETE_REQUEST, payload: newsId });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/news/${newsId}`, {
        headers: { Authorization: `Bearer ${userInfo.data.token}` },
      });
      dispatch({ type: NEWS_DELETE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: NEWS_DELETE_FAIL, payload: message });
    }
  };
};

export const updateNews = (
  newsID,
  title,
  image,
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
  image4
) => {
  return async (dispatch, getState) => {
    dispatch({
      type: NEWS_UPDATE_REQUEST,
      payload: {
        title,
        image,
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
      },
    });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(
        `/api/news/${newsID}`,
        {
          title,
          image,
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
        },
        {
          headers: { Authorization: `Bearer ${userInfo.data.token}` },
        }
      );
      dispatch({ type: NEWS_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: NEWS_UPDATE_FAIL, payload: message });
    }
  };
};

export const detailsNews = (newsId) => {
  return async (dispatch) => {
    dispatch({ type: NEWS_DETAILS_REQUEST, payload: newsId });
    try {
      const { data } = await axios.get(`/api/news/${newsId}`);
      dispatch({ type: NEWS_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: NEWS_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
