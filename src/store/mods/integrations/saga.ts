
import { all, put, takeLatest } from "redux-saga/effects";
import { retrieve } from "@services/Api/requester";
import { API_INTEGRATION } from "@services/Api/routes";
import { indexActionSuccess, loadActionSuccess, updateActionSuccess } from "./actions";
import { PATH_INTEGRATION } from "@services/Navigation";
import { navigatePush } from "../navigate/actions";

function* loadIntegration({ payload }:any) {
    const { type } = payload || {}
    const response = yield retrieve({ method: `${API_INTEGRATION}/${type}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(loadActionSuccess({ data: response.data }));
}

function* indexIntegration({ payload }:any) {
    const { type, id } = payload || {}
    const response = yield retrieve({ method: `${API_INTEGRATION}/${type}/${id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(indexActionSuccess({ data: response.data }));
}

function* updateIntegration({ payload }:any) {
    const { type, id } = payload || {}
    const response = yield retrieve({ method: `${API_INTEGRATION}/${type}/${id}` });
    
    if (response.status !== 200) {
        return;
    }

    yield put(updateActionSuccess({ type }));
}

function* updateIntegrationSuccess({ payload }:any) {
    const { type } = payload || {}
    yield put(navigatePush({ path: `${PATH_INTEGRATION}/${type}` }));
}

export default all([
    takeLatest('@integration/LOAD', loadIntegration),
    takeLatest('@integration/INDEX', indexIntegration),  
    takeLatest('@integration/UPDATE', updateIntegration),  
    takeLatest('@integration/UPDATE_SUCCESS', updateIntegrationSuccess)   
]);