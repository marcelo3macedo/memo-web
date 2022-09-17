import { combineReducers } from "redux";
import auth from "./auth/reducer";
import deck from "./deck/reducer";
import menu from "./menu/reducer";
import navigate from "./navigate/reducer";
import personal from "./personal/reducer";
import profile from "./profile/reducer";
import session from "./session/reducer";
import search from "./search/reducer";
import history from "./history/reducer";
import gallery from "./gallery/reducer";
import validation from "./validation/reducer";
import frequencies from "./frequencies/reducer";
import themes from "./themes/reducer";
import user from "./user/reducer";
import sessions from "./sessions/reducer";
import review from "./review/reducer";
import deckRemove from "./deck/remove/reducer";
import deckEdit from "./deck/edit/reducer";
import deckOpen from "./deck/open/reducer";

export const rootReducer = combineReducers({
    auth,
    user,
    deck,
    menu,
    navigate,
    personal,
    profile,
    session,
    search,
    history,
    gallery,
    validation,
    frequencies,
    sessions,
    deckRemove,
    deckEdit,
    deckOpen,
    review,
    themes
})

export type RootState = ReturnType<typeof rootReducer>