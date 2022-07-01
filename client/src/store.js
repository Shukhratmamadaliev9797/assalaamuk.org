import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  acitivityCreateReducers,
  activityDeleteReducer,
  activityListReducer,
  activityUpdateReducer,
} from "./reducers/activityReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  newsCreateReducers,
  newsDeleteReducer,
  newsListReducer,
  newsUpdateReducer,
} from "./reducers/newsReducers";
import {
  projectCreateReducers,
  projectDeleteReducer,
  projectListReducer,
  projectUpdateReducer,
} from "./reducers/projectReducers";
import {
  userDeleteReducer,
  userListReducer,
  userRegisterReducers,
  userSignInReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const initialState = {
  userSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const reducer = combineReducers({
  userSignIn: userSignInReducer,
  userRegister: userRegisterReducers,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  activityCreate: acitivityCreateReducers,
  activityLists: activityListReducer,
  activityDelete: activityDeleteReducer,
  activityUpdate: activityUpdateReducer,
  projectCreate: projectCreateReducers,
  projectLists: projectListReducer,
  projectDelete: projectDeleteReducer,
  projectUpdate: projectUpdateReducer,
  newsCreate: newsCreateReducers,
  newsLists: newsListReducer,
  newsDelete: newsDeleteReducer,
  newsUpdate: newsUpdateReducer,
  cart: cartReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
