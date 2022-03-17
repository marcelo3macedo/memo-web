import React, { useEffect } from 'react';
import { RootState } from '@store/modules/rootReducer';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import Gallery from '@components/decks/Gallery';
import HeaderPage from '@components/header/HeaderPage';
import PageLoading from '@components/loading/PageLoading';
import { loadAction } from '@store/modules/sessions/actions';

import { Wrapper, Content } from './styles';

export default function Sessions() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { isLoading, sessions } = useSelector((state:RootState) => state.sessions);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('myDeck.title')} subTitle={t('myDeck.subtitle')}></HeaderPage>
        <Gallery sessions={sessions} type="private" />
      </Content>
    </Wrapper>
  ); 
}