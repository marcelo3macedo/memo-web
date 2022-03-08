import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Gallery from '@components/cards/Gallery';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { openPathAction } from '@store/modules/deck/actions';
import PageLoading from '@components/loading/PageLoading';

import { Wrapper, Content, Title, Header, Action, Info, Description } from './styles';
import NotFound from '@components/decks/NotFound';

export default function GalleryDeck() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { deck, failure, loading } = useSelector((state:RootState) => state.deck);
  const { path } = useParams() as any;

  useEffect(() => {
    dispatch(openPathAction({ path }));
  }, [dispatch, path]);

  if (loading) {
    return <PageLoading />
  }

  if (failure) {
    return <NotFound />
  }

  if (!deck) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Header>
            <Info>{t('decks.title')}</Info>
            <Title>{deck.name}</Title>
          </Header>
          <Description>{deck.description}</Description>
          <Action>
            { !deck.isSaved ?
              (<ButtonPrimary content={t('actions.add')} />) :
              (<ButtonPrimary content={t('actions.added')} disabled={true} />)}
          </Action>

          <Gallery cards={deck.cards} type="public" />
      </Content>   
    </Wrapper>
  ); 
}