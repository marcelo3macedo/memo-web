import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconSmall from '@components/icons/IconSmall';
import { removeDeckAction, removeModalAction } from '@store/modules/personal/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, Header, Message, Actions, Action, ActionTitle } from './styles';
import { useTranslation } from 'react-multi-lang';

export default function ModalRemoveDeck() {
  const showRemove = useSelector((state:RootState) => state.personal.showDelete);
  const deck = useSelector((state:RootState) => state.personal.deck);
  const dispatch = useDispatch();
  const t = useTranslation();

  function closeRemoveDeck() {
    dispatch(removeModalAction({ visible: false }))
  }

  function removeCard() {
    dispatch(removeDeckAction({ deck }));
  }

  return (
    <Wrapper show={showRemove}>
      <Content>
        <Header onClick={closeRemoveDeck}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('removeDeck.title')}</Title>
        <Message>{t('removeDeck.message')}</Message>
        <Actions>
          <Action onClick={removeCard}>
            <ActionTitle>{t('removeDeck.positive')}</ActionTitle>
          </Action>
          <Action onClick={closeRemoveDeck}>            
            <ActionTitle>{t('removeDeck.negative')}</ActionTitle>
          </Action>
        </Actions>
      </Content>
    </Wrapper>
  );
}