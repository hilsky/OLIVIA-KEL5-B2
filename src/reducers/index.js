import { combineReducers } from "redux";
import guideReducer from "./guide";
import wisataReducer from "./wisata"

export default combineReducers({
    guideReducer,
    wisataReducer
});