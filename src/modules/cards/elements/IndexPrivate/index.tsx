import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import { SESSIONMODAL_EDITCARD, SESSIONMODAL_REMOVECARD } from '@constants/SessionModal';
import IIndexPrivateCard from '@modules/cards/dtos/IIndexPrivateCard';
import IconSmall from '@components/icons/IconSmall';
import { editAction, removeAction } from '@store/mods/cards/actions';
import { openAction } from '@store/mods/modals/actions';

import { Wrapper, Content, Card, Header, Title, Footer, Action, CardContent, SecretContent, ActionBox, ActionTitle } from './styles';

export default function IndexPrivate({ card }:IIndexPrivateCard) {
  const t = useTranslation()
  const dispatch = useDispatch()
  
  function editClick() {
    dispatch(editAction({ card }))
    dispatch(openAction({ name: SESSIONMODAL_EDITCARD }))
  }

  function removeClick() {
    dispatch(removeAction({ card }))
    dispatch(openAction({ name: SESSIONMODAL_REMOVECARD }))
  }

  if (!card) {
    return <></>
  }

  return (
    <Wrapper className='no-select'>
      <Content>
        <Card>
          <Header>
            <Title>{ card.title }</Title>
          </Header>
          <Footer>
            <CardContent>{ card.content }</CardContent>
            <SecretContent>{ card.secretContent }</SecretContent>
          </Footer>
        </Card>
        <Action>
          <ActionBox onClick={editClick}>
            <IconSmall name={"edit"} />
            <ActionTitle>{t('decks.actions.edit')}</ActionTitle>
          </ActionBox>
          <ActionBox onClick={removeClick}>
            <IconSmall name={"delete"} />
            <ActionTitle>{t('decks.actions.remove')}</ActionTitle>
          </ActionBox>
        </Action>
      </Content>
    </Wrapper>
  );
}