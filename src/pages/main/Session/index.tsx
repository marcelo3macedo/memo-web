import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import CardsTotal from '@components/blocks/CardsTotal';

import { Wrapper, Content, Title, Header, Action } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { reviewAction } from '@store/modules/session/actions';

export default function Session() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const session:any = useSelector((state:RootState) => state.session.session);

  function reviewClick() {
    dispatch(reviewAction());
  }

  if (!session || !session.deck) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Header>
          <Title>{session.deck.name}</Title>
          <CardsTotal size={session.cards ? session.cards.length : 0}/>
        </Header>
        <Action>
          <ButtonPrimary content={t('actions.review')} action={reviewClick}/>
        </Action>
      </Content>
    </Wrapper>
  ); 
}