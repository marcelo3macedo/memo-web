import { getUnixFromDatetime } from '@helpers/DateHelper';
import { ResponseGenerator } from '@interfaces/api/ResponseGeneratorProps';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_LOGIN } from '@services/Navigation';
import { LS_REFRESHTOKEN, LS_TOKEN } from '@services/Storage';
import { navigatePush } from '@store/modules/navigate/actions';
import jwt_decode from 'jwt-decode';
import { put } from 'redux-saga/effects';

import {
  ERR_TOKENINVALID,
  ERR_TOKENNOTFOUND
} from '../../constants/errorMessage';

import { authenticate, request } from './requester';
import { API_REFRESHTOKEN } from './routes';
import { REQUESTER_POST } from './types';

import api from '.';

function* verifyToken() {
  const token: string = yield localStorage.getItem(LS_TOKEN);
  if (!token) {
    throw new Error(ERR_TOKENNOTFOUND);
  }

  const expiresAt = getExpiresAt(token);
  const isExpired = expiresAt > getUnixFromDatetime(Date.now()) ? true : false;

  if (isExpired) {
    const refreshToken: string = yield localStorage.getItem(LS_REFRESHTOKEN);
    const newToken: string = yield renewToken(refreshToken);
    setApiToken(newToken);
    return;
  }

  return setApiToken(token);
}

function setApiToken(token: string) {
  api.defaults.headers.Authorization = `Bearer ${token}`;
}

function getExpiresAt(token: string) {
  const obj = jwt_decode(token) as any;
  return obj ? obj.exp : null;
}

function* renewToken(refreshToken: any) {
  try {
    const response: ResponseGenerator = yield request({
      type: REQUESTER_POST,
      method: API_REFRESHTOKEN,
      data: {
        token: refreshToken
      },
      authNeeded: false
    });

    if (response.status !== 200) {
      return;
    }

    const { token, refreshToken: newRefreshToken } = response.data;
    yield authenticate({ token, refreshToken: newRefreshToken });

    return token;
  } catch (e) {
    yield put(navigatePush({ route: RouteOptions.auth, path: PATH_LOGIN }));
    throw new Error(ERR_TOKENINVALID);
  }
}

export { renewToken, verifyToken };
