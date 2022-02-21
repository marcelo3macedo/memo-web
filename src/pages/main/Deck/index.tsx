import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { cloneAction, reviewAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Title, Header, Action, Info, Description } from './styles';
import Gallery from '@components/cards/Gallery';

export default function Deck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck:any = useSelector((state:RootState) => state.deck.deck);
  const isOwner = deck && deck.isPublic && !deck.owner
  
  function reviewClick({ deck }) {
    dispatch(reviewAction({ deck }));
  }

  function cloneClick({ deck }) {
    dispatch(cloneAction({ deck }));
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
          { isOwner ?
            (<ButtonPrimary content={t('actions.add')} action={() => { cloneClick({ deck })} }/>) :
            (<ButtonPrimary content={t('actions.review')} action={() => { reviewClick({ deck })} }/>) }
        </Action>

        <Gallery cards={deck.cards} type="public" />
      </Content>   
    </Wrapper>
  ); 
}