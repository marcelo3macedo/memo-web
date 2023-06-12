import IconSmall from '@components/icons/IconSmall';
import { setTargetAction as setEditTargetAction } from '@store/modules/deck/edit/actions';
import { setTargetAction } from '@store/modules/deck/remove/actions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import {
  Wrapper,
  Content,
  Header,
  Details,
  Title,
  Status,
  StatusTitle,
  RemoveArea,
  Deck,
} from './styles';

export default function Private({ deck }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const statusTitle = deck.isPublic
    ? t('session.public')
    : t('session.private');
  const frequencyName = deck.frequency ? deck.frequency.name : '';

  function removeAction() {
    dispatch(setTargetAction({ target: deck }));
  }

  function editAction() {
    dispatch(setEditTargetAction({ target: deck }));
  }

  if (!deck) {
    return <></>;
  }

  return (
    <Wrapper className='no-select'>
      <Content>
        <RemoveArea className='remove-area' onClick={removeAction}>
          <IconSmall name='delete' />
        </RemoveArea>
        <Deck onClick={editAction}>
          <Header>
            <Title>{deck.name}</Title>
          </Header>
          <Details>
            <Status>
              <IconSmall name='visibility' />
              <StatusTitle>{statusTitle}</StatusTitle>
            </Status>
            <Status>
              <IconSmall name='repeat' />
              <StatusTitle>{frequencyName}</StatusTitle>
            </Status>
          </Details>
        </Deck>
      </Content>
    </Wrapper>
  );
}
