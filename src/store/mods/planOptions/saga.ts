import { REQUESTER_GET } from "@constants/Requester";
import { request } from "@services/Api/requester";
import { API_PLANS_OPTION } from "@services/Api/routes";
import { isValidDocument } from "@services/Document";
import { all, put, takeLatest } from "redux-saga/effects";
import { indexSuccess, paymentFailed, paymentSuccess } from "./actions";

function* index({ payload }:any) {
    const { name } = payload || {}
    const response = yield request({ 
        type: REQUESTER_GET, 
        method: `${API_PLANS_OPTION}/${name}` 
    })

    if (response.status !== 200) {
        return;
    }

    yield put(indexSuccess({ option: response.data }))
}

function* payment({ payload }:any) {
    const { document } = payload || {}

    if (!isValidDocument(document)) {
        return yield put(paymentFailed())
    }
    
    // TODO: REQUEST
    const payment = {
        qrCodeUrl: 'https://d1q276s95tpn93.cloudfront.net/production/2022/12/09/itau/N109880751_qrcode.svg',
        code: '21341698498461651984194186419849848916198198189189'
    }

    yield put(paymentSuccess({ payment }))
}

export default all([
    takeLatest('@planOptions/INDEX', index),
    takeLatest('@planOptions/PAYMENT', payment),
])