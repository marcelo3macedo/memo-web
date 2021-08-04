import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import { editAction } from '@store/modules/card/actions';

import { Wrapper, Content, Header, Title, CardArea, Answer, Actions, Action, ActionName } from './styles';

export default function Card({card=null}) {
  const dispatch = useDispatch();
  const t = useTranslation();

  function deleteClick() {
  }

  function editClick(card) {
    dispatch(editAction(card));
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
            <Action onClick={() => { editClick(card) }}>
              <IconSmall name={"edit"}/>
              <ActionName>{t('actions.edit')}</ActionName>
            </Action>
          </Actions>
        </CardArea>
      </Content>
    </Wrapper>
  );
}