import { combineReducers } from "redux";
import guideReducer from "./guide";
import wisataReducer from "./wisata"
import auth from "./auth";
import message from "./message";
import userReducer from "./user"

export default combineReducers({
    guideReducer,
    wisataReducer,
    auth,
    message,
    userReducer
});