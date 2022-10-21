import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import ButtonSecondary from '@components/button/ButtonSecondary';
import { openAction } from '@store/mods/decks/actions';
import { closeAction } from '@store/mods/modals/actions';

import { Wrapper, Content, Title, Action } from './styles';

export default function EditOption({ id }) {
  const t = useTranslation()
  const dispatch = useDispatch()

  function editAction() {
    dispatch(openAction({ id }))
    dispatch(closeAction())
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.editMessage')}</Title>
        <Action className='review' onClick={editAction}>
          <ButtonSecondary content={t('decks.actions.edit')}/>
        </Action>
      </Content>
    </Wrapper>
  );
}