import { combineReducers } from "redux";
import auth from "./auth/reducer";
import navigate from "./navigate/reducer";

export default combineReducers({
    auth,
    navigate
})