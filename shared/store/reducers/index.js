import { combineReducers } from "redux";
import { default as topheadlines } from "./topheadlines";
import { default as favourites } from "./favourites";
export default combineReducers({
    topheadlines,
    favourites
});
