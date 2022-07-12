import {
  ACTIVITY_CREATE_FAIL,
  ACTIVITY_CREATE_REQUEST,
  ACTIVITY_CREATE_RESET,
  ACTIVITY_CREATE_SUCCESS,
  ACTIVITY_DELETE_FAIL,
  ACTIVITY_DELETE_REQUEST,
  ACTIVITY_DELETE_RESET,
  ACTIVITY_DELETE_SUCCESS,
  ACTIVITY_DETAILS_FAIL,
  ACTIVITY_DETAILS_REQUEST,
  ACTIVITY_DETAILS_SUCCESS,
  ACTIVITY_LIST_FAIL,
  ACTIVITY_LIST_REQUEST,
  ACTIVITY_LIST_SUCCESS,
  ACTIVITY_UPDATE_FAIL,
  ACTIVITY_UPDATE_REQUEST,
  ACTIVITY_UPDATE_RESET,
  ACTIVITY_UPDATE_SUCCESS,
} from "../constants/activityConstants";

export const acitivityCreateReducers = (state = { success: false }, action) => {
  switch (action.type) {
    case ACTIVITY_CREATE_REQUEST:
      return { loading: true };
    case ACTIVITY_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ACTIVITY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ACTIVITY_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const activityListReducer = (state = { activityList: [] }, action) => {
  switch (action.type) {
    case ACTIVITY_LIST_REQUEST:
      return { loading: true };
    case ACTIVITY_LIST_SUCCESS:
      return { loading: false, activityList: action.payload };
    case ACTIVITY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const activityDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIVITY_DELETE_REQUEST:
      return { loading: true };
    case ACTIVITY_DELETE_SUCCESS:
      return { loading: false, success: true };
    case ACTIVITY_DELETE_FAIL:
      return { loading: false, error: action.payload };
    case ACTIVITY_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const activityUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIVITY_UPDATE_REQUEST:
      return { loading: true };
    case ACTIVITY_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case ACTIVITY_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case ACTIVITY_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const activityDetailsReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case ACTIVITY_DETAILS_REQUEST:
      return { loading: true };
    case ACTIVITY_DETAILS_SUCCESS:
      return { loading: false, activity: action.payload };
    case ACTIVITY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
