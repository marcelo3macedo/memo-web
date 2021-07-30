import { combineReducers } from "redux";
import auth from "./auth/reducer";
import menu from "./menu/reducer";
import navigate from "./navigate/reducer";
import personal from "./personal/reducer";
import search from "./search/reducer";

export const rootReducer = combineReducers({
    auth,
    menu,
    navigate,
    personal,
    search
})

export type RootState = ReturnType<typeof rootReducer>