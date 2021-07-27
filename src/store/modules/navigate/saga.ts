
import { all, takeLatest } from "redux-saga/effects";
import history from "@services/History";

function* push({ path }:any) {
    return yield history.push(path);
}

export default all([
    takeLatest('@navigate/PUSH', push),
]);