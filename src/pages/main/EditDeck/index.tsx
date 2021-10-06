import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import CardsTotal from '@components/blocks/CardsTotal';

import CardsList from '@components/blocks/CardsList';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, Header, SubTitle, Finish, FinishWrapper, NewCard } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { finishAction } from '@store/modules/deck/actions';
import { newCardAction } from '@store/modules/card/actions';
import ModalEditCard from '@components/modal/ModalEditCard';
import ModalAddCard from '@components/modal/ModalAddCard';
import ButtonPrimary from '@components/button/ButtonPrimary';
import ModalRemoveDeck from '@components/modal/ModalRemoveCard ';

export default function EditDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck = useSelector((state:RootState) => state.deck.deck);
  
  function endEdition() {
    dispatch(finishAction());
  }

  function newCardClick() {
    dispatch(newCardAction())
  }

  return (
    <Wrapper>
      <Content>
        <SubTitle>{t('decks.title')}</SubTitle>
        <Header>
          <Title>{deck.name}</Title>
          <CardsTotal size={deck.cards.length}/>
        </Header>
        <NewCard>
          <ButtonPrimary content={t('actions.addCard')} action={newCardClick}></ButtonPrimary>
        </NewCard>
        <CardsList cards={deck.cards}/>
        <Finish>
          <FinishWrapper>
            <ButtonSecondary content={t('actions.finishSession')} action={endEdition}></ButtonSecondary>
          </FinishWrapper>
        </Finish>             
        <ModalAddCard></ModalAddCard>
        <ModalEditCard></ModalEditCard>
        <ModalRemoveDeck></ModalRemoveDeck>   
      </Content>
    </Wrapper>
  ); 
}