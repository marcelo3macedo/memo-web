import React, { useEffect } from 'react';
import { RootState } from '@store/modules/rootReducer';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import Gallery from '@components/decks/Gallery';
import HeaderPage from '@components/header/HeaderPage';
import PageLoading from '@components/loading/PageLoading';
import SearchDeck from '@components/decks/Search';
import RemoveModal from '@components/decks/RemoveModal';
import Empty from '@components/decks/Empty';
import { PATH_ADDDECK } from '@services/Navigation';
import { loadAction, searchAction } from '@store/modules/sessions/actions';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content } from './styles';
import EditModal from '@components/decks/EditModal';

export default function Sessions() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { isLoading, sessions } = useSelector((state:RootState) => state.sessions);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);
  
  function createSessionClick() {
    dispatch(navigatePush({ path: PATH_ADDDECK }));
  }

  function searchEvent(term) {
    dispatch(searchAction({ term }));
  }
  
  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('myDeck.title')} subTitle={t('myDeck.subtitle')}></HeaderPage>
        <SearchDeck action={searchEvent} />

        { sessions.length === 0 ? 
          (<Empty action={createSessionClick}/>): 
          (<Gallery sessions={sessions} type="private" />)
        }

        <RemoveModal />
        <EditModal />
      </Content>
    </Wrapper>
  ); 
}