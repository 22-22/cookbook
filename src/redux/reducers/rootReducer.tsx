import { combineReducers } from "redux";
import { userDataReducer } from "./userDataReducer";

export default combineReducers({
    user: userDataReducer
})