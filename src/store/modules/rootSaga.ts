import { all } from "redux-saga/effects";
import auth from "./auth/saga";
import menu from "./menu/saga";
import navigate from "./navigate/saga";
import personal from "./personal/saga";

export default function* rootSaga() {
    return yield all([auth, menu, navigate, personal]);
}