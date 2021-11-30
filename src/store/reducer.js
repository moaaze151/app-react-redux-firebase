import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import projectReducer from "./reducers/projectReducer";

const reducers = combineReducers({
  authReducer,
  projectReducer,
});
export default reducers;
