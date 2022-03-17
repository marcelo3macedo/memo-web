import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Title, Header, Message, Actions, Action, ActionTitle } from './styles';

export default function ModalRemoveDeck({ show, submitAction, closeAction }) {
  const t = useTranslation();

  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={closeAction}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('removeDeck.title')}</Title>
        <Message>{t('removeDeck.message')}</Message>
        <Actions>
          <Action onClick={submitAction}>
            <ActionTitle>{t('removeDeck.positive')}</ActionTitle>
          </Action>
          <Action onClick={closeAction}>            
            <ActionTitle>{t('removeDeck.negative')}</ActionTitle>
          </Action>
        </Actions>
      </Content>
    </Wrapper>
  );
}