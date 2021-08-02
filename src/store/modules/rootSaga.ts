import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import deck from "./deck/saga";
import menu from "./menu/saga";
import navigate from "./navigate/saga";
import personal from "./personal/saga";
import search from "./search/saga";

export default function* rootSaga() {
    return yield all([auth, deck, menu, navigate, personal, search]);
}