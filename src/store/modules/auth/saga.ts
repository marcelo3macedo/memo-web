
import { all, takeLatest } from "redux-saga/effects";
import history from "@services/History";

function* navigate() {
    yield history.push("/cart");
}

export default all([
    takeLatest('@auth/NAVIGATE_FORGOT_PASSWORD', navigate),
]);