import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import banner from '@assets/banners/banner02.png';

import IconSmall from '@components/icons/IconSmall';
import { editAction, removeAction } from '@store/modules/card/actions';

import { Wrapper, Content, Header, CardArea, CardTitle, CardContent, CardSecretContent, Actions, Action, ActionName } from './styles';

export default function Card({card=null, preview=false }) {
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
            <CardTitle>{card.title}</CardTitle>
            <CardContent>{card.content}</CardContent>
            <CardSecretContent>{card.secretContent}</CardSecretContent>
          </Header>

          {!preview ? (
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
          ) : <></>}
        </CardArea>
      </Content>
    </Wrapper>
  );
}