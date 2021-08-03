import React from 'react';

import IconSmall from '@components/icons/IconSmall';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Header, Title, CardArea, Answer, Actions, Action, ActionName } from './styles';

export default function Card({card=null}) {
  const t = useTranslation();

  function deleteClick() {
  }

  function editClick() {
  }

  return (
    <Wrapper>
      <Content>
        <CardArea>
          <Header>
            <Title>{card.content}</Title>
            <Answer>{card.secretContent}</Answer>
          </Header>

          <Actions>
            <Action onClick={deleteClick}>
              <IconSmall name={"delete"}/>
              <ActionName>{t('actions.delete')}</ActionName>
            </Action>
            <Action onClick={editClick}>
              <IconSmall name={"edit"}/>
              <ActionName>{t('actions.edit')}</ActionName>
            </Action>
          </Actions>
        </CardArea>
      </Content>
    </Wrapper>
  );
}