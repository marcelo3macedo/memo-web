import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import deck from "./deck/saga";
import menu from "./menu/saga";
import navigate from "./navigate/saga";
import personal from "./personal/saga";
import session from "./session/saga";
import search from "./search/saga";
import profile from "./profile/saga";
import history from "./history/saga";
import gallery from "./gallery/saga";
import validation from "./validation/saga";
import frequencies from "./frequencies/saga";
import themes from "./themes/saga";
import user from "./user/saga";
import sessions from "./sessions/saga";
import deckRemove from "./deck/remove/saga";
import deckEdit from "./deck/edit/saga";
import deckOpen from "./deck/open/saga";
import review from "./review/saga";

export default function* rootSaga() {
    return yield all([auth, user, sessions, deckRemove, deckEdit, deckOpen, personal, deck, menu, navigate, validation, gallery, session, search, profile, history, frequencies, review, themes]);
}