import { combineReducers } from "redux";
import auth from "./auth/reducer";
import card from "./card/reducer";
import deck from "./deck/reducer";
import menu from "./menu/reducer";
import navigate from "./navigate/reducer";
import personal from "./personal/reducer";
import resume from "./resume/reducer";
import review from "./review/reducer";
import search from "./search/reducer";

export const rootReducer = combineReducers({
    auth,
    card,
    deck,
    menu,
    navigate,
    personal,
    resume,
    review,
    search
})

export type RootState = ReturnType<typeof rootReducer>