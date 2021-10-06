import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Content, Title, Header, Message, Actions, Action, ActionTitle } from './styles';
import IconSmall from '@components/icons/IconSmall';
import { closeRemoveAction, removeCardAction } from '@store/modules/card/actions';
import { RootState } from '@store/modules/rootReducer';

export default function ModalRemoveDeck() {
  const showRemove = useSelector((state:RootState) => state.card.showRemove);
  const dispatch = useDispatch();

  function closeRemoveDeck() {
    dispatch(closeRemoveAction());
  }

  function removeCard() {
    dispatch(removeCardAction());
  }

  return (
    <Wrapper show={showRemove}>
      <Content>
        <Header onClick={closeRemoveDeck}>
          <IconSmall name="delete"/>
        </Header>
        <Title>Confirmar Remover</Title>
        <Message>Deseja realmente remover esse card?</Message>
        <Actions>
          <Action onClick={removeCard}>
            <ActionTitle>Sim</ActionTitle>
          </Action>
          <Action onClick={closeRemoveDeck}>            
            <ActionTitle>Não</ActionTitle>
          </Action>
        </Actions>
      </Content>
    </Wrapper>
  );
}