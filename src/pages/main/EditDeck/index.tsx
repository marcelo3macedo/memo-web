import React from 'react';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import CardsTotal from '@components/blocks/CardsTotal';

import { Wrapper, Content, Title, Header, Action } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import CardsList from '@components/blocks/CardsList';
import { RootState } from '@store/modules/rootReducer';

export default function EditDeck() {
  const t = useTranslation();
  const deck = useSelector((state:RootState) => state.deck.deck);

  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>{deck.name}</Title>
          <CardsTotal size={deck.cards.length}/>
        </Header>
        <Action>
          <ButtonPrimary content={t('actions.addCard')}/>
        </Action>
        <CardsList cards={deck.cards}/>     
      </Content>
    </Wrapper>
  ); 
}