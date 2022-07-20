import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { initAction, removeSessionAction } from '@store/modules/deck/remove/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, Actions, Action, RemoveArea } from './styles';
import IconSmall from '@components/icons/IconSmall';

export default function RemoveModal() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { show } = useSelector((state:RootState) => state.deckRemove);

  useEffect(() => {
    dispatch(initAction());
  }, [dispatch]);

  function removeAction() {
    dispatch(removeSessionAction());
  }

  function cancelAction() {
    dispatch(initAction());
  }

  return (
    <Wrapper show={show}>
      <Content>
        <RemoveArea className='remove-area' onClick={cancelAction}>
          <IconSmall name="delete" />
        </RemoveArea>
        <Title>{t('session.removeConfirm')}</Title>

        <Actions>
          <Action className='cancel'>
            <ButtonPrimary content={t('decks.actions.cancel')} action={cancelAction} />
          </Action>
          <Action className='remove'>
            <ButtonPrimary content={t('decks.actions.remove')} action={removeAction} />
          </Action>
        </Actions>
      </Content>
    </Wrapper>
  );
}