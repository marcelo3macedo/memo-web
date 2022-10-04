import { combineReducers } from "redux";
import auth from "./auth/reducer";
import deck from "./deck/reducer";
import menu from "./menu/reducer";
import personal from "./personal/reducer";
import profile from "./profile/reducer";
import session from "./session/reducer";
import search from "./search/reducer";
import gallery from "./gallery/reducer";
import validation from "./validation/reducer";
import frequencies from "./frequencies/reducer";
import themes from "./themes/reducer";
import user from "./user/reducer";
import deckRemove from "./deck/remove/reducer";
import deckEdit from "./deck/edit/reducer";
import deckOpen from "./deck/open/reducer";

import modal from "../mods/modals/reducer";
import cards from "../mods/cards/reducer";
import decks from "../mods/decks/reducer";
import options from "../mods/options/reducer";
import sessions from "../mods/sessions/reducer";
import review from "../mods/review/reducer";
import navigate from "../mods/navigate/reducer";
import featured from "../mods/featured/reducer";
import histories from "../mods/histories/reducer";

export const rootReducer = combineReducers({
    modal,
    cards,
    decks,
    options,
    sessions,
    review,
    featured,
    histories,
    
    auth,
    user,
    deck,
    menu,
    navigate,
    personal,
    profile,
    session,
    search,
    gallery,
    validation,
    frequencies,
    deckRemove,
    deckEdit,
    deckOpen,
    themes
})

export type RootState = ReturnType<typeof rootReducer>