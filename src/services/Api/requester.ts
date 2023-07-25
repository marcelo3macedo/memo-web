import {
  ERR_REQUEST_FAILED_401,
  ERR_TOKENNOTFOUND
} from '@constants/errorMessage';
import { STATUS_UNAUTHORIZED } from '@constants/statusCode';
import { RequesterProps } from '@interfaces/api/RequesterProps';
import { TokensProps } from '@interfaces/auth/TokensProps';
import { HttpError } from '@interfaces/errors/HttpError';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_LOGIN } from '@services/Navigation';
import { LS_REFRESHTOKEN, LS_TOKEN } from '@services/Storage';
import { navigatePush } from '@store/modules/navigate/actions';
import jwt_decode from 'jwt-decode';
import { call, put } from 'redux-saga/effects';

import { verifyToken } from './validation';

import api from '.';

export function* request({
  type,
  method,
  data,
  authNeeded = true
}: RequesterProps): any {
  const action = getByType(type);
  if (!action) {
    return;
  }

  try {
    if (authNeeded) {
      yield call(verifyToken);
    }

    const response = yield call(action, method, data);
    return response;
  } catch (e) {
    yield validateError(e, authNeeded);
  }
}

export function getByType(type: string) {
  const apiOptions = api as any;
  return apiOptions[type];
}

export function* validateError(e: any, authNeeded: boolean) {
  if (
    authNeeded &&
    (e.message === ERR_TOKENNOTFOUND ||
      e.message == ERR_REQUEST_FAILED_401 ||
      e.status === STATUS_UNAUTHORIZED)
  ) {
    yield put(navigatePush({ route: RouteOptions.auth, path: PATH_LOGIN }));
  }

  const message = e?.response?.data?.error;
  throw new HttpError(message, e.status);
}

export function* authenticate({ token, refreshToken }: TokensProps) {
  localStorage.setItem(LS_TOKEN, token);
  localStorage.setItem(LS_REFRESHTOKEN, refreshToken);
  api.defaults.headers.Authorization = `Bearer ${token}`;

  return yield;
}

export function* logoff() {
  yield localStorage.clear();
  api.defaults.headers.Authorization = '';
}

export function decode(token: string) {
  const decoded = jwt_decode(token);
  const { name, email } = decoded || ({} as any);

  return {
    name,
    email
  };
}
