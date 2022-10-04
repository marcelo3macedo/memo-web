import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import deck from "./deck/saga";
import menu from "./menu/saga";
import personal from "./personal/saga";
import session from "./session/saga";
import search from "./search/saga";
import profile from "./profile/saga";
import validation from "./validation/saga";
import frequencies from "./frequencies/saga";
import themes from "./themes/saga";
import user from "./user/saga";
import deckRemove from "./deck/remove/saga";
import deckEdit from "./deck/edit/saga";
import deckOpen from "./deck/open/saga";

import gallery from "../mods/gallery/saga";
import cards from "../mods/cards/saga";
import decks from "../mods/decks/saga";
import options from "../mods/options/saga";
import sessions from "../mods/sessions/saga";
import review from "../mods/review/saga";
import navigate from "../mods/navigate/saga";
import featured from "../mods/featured/saga";
import histories from "../mods/histories/saga";

export default function* rootSaga() {
    return yield all([
        cards, decks, options, sessions, featured, histories,
        auth, user, deckRemove, deckEdit, deckOpen, personal, deck, menu, navigate, validation, gallery, session, search, profile, frequencies, review, themes
    ])
}