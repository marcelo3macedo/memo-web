import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Title, Header, Actions, Action, ActionTitle } from './styles';

export default function ModalRemoveCard({ show, submitAction, closeAction }) {
  const t = useTranslation();
  
  return (
    <Wrapper show={show}>
      <Content>
        <Header onClick={() => { closeAction() }}>
          <IconSmall name="delete"/>
        </Header>
        <Title>{t('removeCard.title')}</Title>
        <Actions>
          <Action onClick={() => { closeAction() }}>            
            <ActionTitle>{t('removeCard.negative')}</ActionTitle>
          </Action>
          <Action className='remove' onClick={() => { submitAction() }}>
            <ActionTitle>{t('removeCard.positive')}</ActionTitle>
          </Action>          
        </Actions>
      </Content>
    </Wrapper>
  );
}