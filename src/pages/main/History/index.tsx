import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import LoadingPage from '@modules/loading/elements/LoadingPage';
import PageHeader from '@modules/headers/elements/PageHeader';
import List from '@modules/histories/elements/List';
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
    return <LoadingPage />;
  }
 
  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('history.title')} subTitle={t('history.subTitle')} />
        <List sessions={sessions} />
     </Content>
    </Wrapper>
  ); 
}