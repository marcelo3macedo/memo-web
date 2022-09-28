import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import ButtonSecondary from '@components/button/ButtonSecondary';

import { Wrapper, Content, Title, Header, Actions, Action, ActionArea } from './styles';

export default function RemoveCardModal({ show, submitAction, closeAction }) {
  const t = useTranslation();
  
  return (
    <Wrapper show={show}>
      <Content>
        <Header>
          <Title>{t('removeCard.title')}</Title>
          <Action onClick={closeAction}>
            <IconSmall name="delete"/>
          </Action>          
        </Header>   
        <Actions>
          <ActionArea>
            <ButtonSecondary content={t('removeCard.negative')} action={closeAction} />
          </ActionArea>
          <ActionArea>
            <ButtonSecondary content={t('removeCard.positive')} action={submitAction} />
          </ActionArea>
        </Actions>
      </Content>
    </Wrapper>
  );
}