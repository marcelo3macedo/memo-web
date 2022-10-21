import React, { useEffect } from 'react';
import { RootState } from '@store/modules/rootReducer';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import SessionSearch from '@components/containers/sessions/SessionSearch';
import SessionList from '@components/containers/sessions/SearchList';
import PageHeader from '@modules/headers/elements/PageHeader';
import LoadingPage from '@modules/loading/elements/LoadingPage';
import { loadListAction } from '@store/mods/sessions/actions';

import { Wrapper, Content } from './styles';

export default function Sessions() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { isLoading, sessions } = useSelector((state:RootState) => state.sessions)
  const location = useLocation()
  const { search } = queryString.parse(location.search) || {}
  
  useEffect(() => {
    dispatch(loadListAction(search))
  }, [dispatch, search])
  
  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('myDeck.title')} subTitle={t('myDeck.subtitle')} />
        <SessionSearch />
        <SessionList sessions={sessions} />        
      </Content>
    </Wrapper>
  ); 
}