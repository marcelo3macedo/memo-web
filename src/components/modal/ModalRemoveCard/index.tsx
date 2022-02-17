import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Header, Message, Actions, Action, ActionTitle } from './styles';
import IconSmall from '@components/icons/IconSmall';
import { confirmRemoveAction, openModalAction } from '@store/modules/card/actions';
import { RootState } from '@store/modules/rootReducer';

export default function ModalRemoveCard() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const modal = useSelector((state:RootState) => state.card.modal);
  const show = (modal === "remove-card")

  function closeRemoveDeck() {
    dispatch(openModalAction(null))
  }

  function removeCard() {
    dispatch(confirmRemoveAction());
  }

  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={closeRemoveDeck}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('removeCard.title')}</Title>
        <Message>{t('removeCard.message')}</Message>
        <Actions>
          <Action onClick={removeCard}>
            <ActionTitle>{t('removeCard.positive')}</ActionTitle>
          </Action>
          <Action onClick={closeRemoveDeck}>            
            <ActionTitle>{t('removeCard.negative')}</ActionTitle>
          </Action>
        </Actions>
      </Content>
    </Wrapper>
  );
}