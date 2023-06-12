import PageLoading from '@components/loading/PageLoading';
import { ACTIVATE_FAILED, ACTIVATE_LOADING } from '@constants/Activate';
import { activateAction } from '@store/mods/auth/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Wrapper, Content, Title, SubTitle } from './styles';

export default function Activate() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();
  const { activateStatus } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    if (!token) {
      return;
    }

    dispatch(activateAction({ token }));
  }, [dispatch, location]);

  if (!activateStatus) {
    return <PageLoading />;
  }

  function getMessage(status) {
    if (status === ACTIVATE_LOADING) return t('auth.activateCheck');

    return status === ACTIVATE_FAILED
      ? t('auth.activateFailed')
      : t('auth.activateSuccess');
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('auth.activateTitle')}</Title>
        <SubTitle>{getMessage(activateStatus)}</SubTitle>
      </Content>
    </Wrapper>
  );
}
