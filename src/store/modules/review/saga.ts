
import { all, takeLatest } from "redux-saga/effects";

function* option() {
}
export default all([
    takeLatest('@review/OPTION', option)
]);