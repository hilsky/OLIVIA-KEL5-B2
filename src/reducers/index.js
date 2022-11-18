import { combineReducers } from "redux";
import guideReducer from "./guide";
import wisataReducer from "./wisata"
import auth from "./auth";
import message from "./message";

export default combineReducers({
    guideReducer,
    wisataReducer,
    auth,
    message
});