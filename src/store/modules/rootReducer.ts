import { combineReducers } from "redux";
import auth from "./auth/reducer";
import menu from "./menu/reducer";
import navigate from "./navigate/reducer";

export const rootReducer = combineReducers({
    auth,
    menu,
    navigate
})

export type RootState = ReturnType<typeof rootReducer>