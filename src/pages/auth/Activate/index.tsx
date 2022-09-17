import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useLocation } from 'react-router-dom';

import { loadActivate } from '@store/modules/auth/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, SubTitle } from './styles';
import PageLoading from '@components/loading/PageLoading';

export default function Activate() {
  const t = useTranslation()
  const dispatch = useDispatch();
  const location = useLocation();
  const { activation } = useSelector((state:RootState) => state.auth);
    
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (!token) {
      return;
    }
    
    dispatch(loadActivate({ token }));
  }, [dispatch, location]);

  if (!activation) {
    return <PageLoading/>;
  }


  return (
    <Wrapper>
        <Content>
          <Title>{t('auth.activateTitle')}</Title>
          {activation.status === "loading" ? (<SubTitle>{t('auth.activateCheck')}</SubTitle>) : <></>}
          {activation.status === "failed" ? (<SubTitle>{t('auth.activateFailed')}</SubTitle>) : <></>}
          {activation.status === "success" ? (<SubTitle>{t('auth.activateSuccess')}</SubTitle>) : <></>}
        </Content>
    </Wrapper>
  ); 
}