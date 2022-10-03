import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import { closeAction } from '@store/mods/modals/actions';

import { Wrapper, Content, Title, Action, ActionTitle } from './styles';
import { removeSubmitAction } from '@store/mods/decks/actions';

export default function RemoveOption({ id }) {
  const t = useTranslation()
  const dispatch = useDispatch()

  function removeClick() {
    dispatch(removeSubmitAction({ id }))
    dispatch(closeAction())
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.removeMessage')}</Title>
        <Action onClick={removeClick}>
          <ActionTitle>{t('decks.actions.permanentRemove')}</ActionTitle>
        </Action>
      </Content>
    </Wrapper>
  );
}