import React, { useEffect } from 'react';
import { RootState } from '@store/modules/rootReducer';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import Gallery from '@components/decks/Gallery';
import HeaderPage from '@components/header/HeaderPage';
import { loadDecksAction } from '@store/modules/personal/actions';

import { Wrapper, Content } from './styles';

export default function MyDecks() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { decks } = useSelector((state:RootState) => state.personal);

  useEffect(() => {
    dispatch(loadDecksAction());
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('myDeck.title')} subTitle={t('myDeck.subtitle')}></HeaderPage>
        <Gallery decks={decks} type="private" />
      </Content>
    </Wrapper>
  ); 
}