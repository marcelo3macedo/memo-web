import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import CardsTotal from '@components/blocks/CardsTotal';

import { Wrapper, Content, Title, Header, Action } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import CardsList from '@components/blocks/CardsList';
import { RootState } from '@store/modules/rootReducer';
import { reviewAction } from '@store/modules/deck/actions';

export default function Deck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck:any = useSelector((state:RootState) => state.deck.deck);

  function reviewClick() {
    dispatch(reviewAction());
  }

  return (
    <Wrapper>
      {deck ? (
        <Content>
          <Header>
            <Title>{deck.name}</Title>
            <CardsTotal size={deck.cards ? deck.cards.length : 0}/>
          </Header>
          <Action>
            <ButtonPrimary content={t('actions.review')} action={reviewClick}/>
          </Action>
          <CardsList cards={deck.cards}/>     
        </Content>
      ): <></>}      
    </Wrapper>
  ); 
}