import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import banner from '@assets/banners/banner02.png';

import IconSmall from '@components/icons/IconSmall';
import { editAction, removeAction } from '@store/modules/card/actions';

import { Wrapper, Content, Header, Title, CardArea, Answer, Actions, Action, ActionName } from './styles';

export default function Card({card=null}) {
  const dispatch = useDispatch();
  const t = useTranslation();

  function deleteClick(card) {
    dispatch(removeAction(card));
  }

  function editClick(card) {
    dispatch(editAction(card));
  }

  return (
    <Wrapper>
      <Content>
        <CardArea background={banner}>
          <Header>
            <Title>{card.content}</Title>
            <Answer>{card.secretContent}</Answer>
          </Header>

          <Actions>
            <Action onClick={() => { editClick(card) }}>
              <IconSmall name={"edit"}/>
              <ActionName>{t('actions.edit')}</ActionName>
            </Action>
            <Action onClick={() => { deleteClick(card) }}>
              <IconSmall name={"delete"}/>
              <ActionName>{t('actions.delete')}</ActionName>
            </Action>            
          </Actions>
        </CardArea>
      </Content>
    </Wrapper>
  );
}