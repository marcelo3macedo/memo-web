import jwt_decode from "jwt-decode";
import { LS_REFRESHTOKEN, LS_TOKEN } from "@services/LocalStorage";
import { authenticate, request } from "./requester";
import { API_REFRESHTOKEN } from "./routes";
import { REQUESTER_POST } from "@constants/Requester";

function* verifyToken() {
    const token = localStorage.getItem(LS_TOKEN)
    if (!token) {
        return
    }
    
    const expiresAt = getExpiresAt(token)
    const isExpired = expiresAt > Date.now() ? true: false
    const refreshToken = localStorage.getItem(LS_REFRESHTOKEN)

    if (isExpired) {
        yield renewToken({ refreshToken })
    } 
}

function getExpiresAt(token) {
    const obj = jwt_decode(token)    
    return obj ? obj['exp'] : null
}

function* renewToken({ refreshToken }) {
    const response = yield request({ type: REQUESTER_POST, method: API_REFRESHTOKEN, data: {
        token: refreshToken
    }});

    if (response.status !== 200) {
        return;
    }

    const { token, refreshToken:newRefreshToken } = response.data
    yield authenticate({ token, refreshToken: newRefreshToken })

    return token
}

export {
    verifyToken,
    renewToken
};