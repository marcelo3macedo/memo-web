import React, { useEffect } from 'react';
import { RootState } from '@store/modules/rootReducer';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import HeaderPage from '@components/header/HeaderPage';
import PageLoading from '@components/loading/PageLoading';
import { loadAction } from '@store/modules/sessions/actions';
import SessionSearch from '@components/containers/sessions/SessionSearch';
import SessionList from '@components/containers/sessions/SearchList';

import { Wrapper, Content } from './styles';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export default function Sessions() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { isLoading, sessions } = useSelector((state:RootState) => state.sessions)
  const location = useLocation()
  const { search } = queryString.parse(location.search) || {}
  
  useEffect(() => {
    dispatch(loadAction(search))
  }, [dispatch, search])
  
  if (isLoading) {
    return <PageLoading />
  }

  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('myDeck.title')} subTitle={t('myDeck.subtitle')}></HeaderPage>
        <SessionSearch />
        <SessionList sessions={sessions} />        
      </Content>
    </Wrapper>
  ); 
}