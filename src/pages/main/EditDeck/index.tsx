import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import CardsTotal from '@components/blocks/CardsTotal';

import { Wrapper, Content, Title, Header, Action } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import CardsList from '@components/blocks/CardsList';
import { RootState } from '@store/modules/rootReducer';
import { newCardAction } from '@store/modules/card/actions';

export default function EditDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck = useSelector((state:RootState) => state.deck.deck);

  function newCardClick() {
    dispatch(newCardAction());
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>{deck.name}</Title>
          <CardsTotal size={deck.cards.length}/>
        </Header>
        <Action>
          <ButtonPrimary content={t('actions.addCard')} action={newCardClick}/>
        </Action>
        <CardsList cards={deck.cards}/>     
      </Content>
    </Wrapper>
  ); 
}