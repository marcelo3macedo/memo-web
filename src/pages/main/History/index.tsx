import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import HeaderPage from '@components/header/HeaderPage';
import Histories from '@components/sessions/Histories';
import PageLoading from '@components/loading/PageLoading';
import { loadAction } from '@store/modules/history/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content } from './styles';

export default function History() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { sessions, isLoading } = useSelector((state:RootState) => state.history);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }
 
  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('history.title')} subTitle={t('history.subTitle')}></HeaderPage>
        <Histories sessions={sessions} />
     </Content>
    </Wrapper>
  ); 
}