import { combineReducers } from "redux";
import SiteReducer from "./site-reducer";

const reducers = {
  siteStore: SiteReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
