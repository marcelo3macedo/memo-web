import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import { SESSIONMODAL_REMOVECARD } from '@constants/SessionModal';
import IconSmall from '@components/icons/IconSmall';
import ButtonSecondary from '@components/button/ButtonSecondary';
import { RootState } from '@store/modules/rootReducer';
import { closeAction } from '@store/mods/modals/actions';
import { editConfirmRemove } from '@store/mods/cards/actions';

import { Wrapper, Content, Title, Header, Actions, Action, ActionArea } from './styles';

export default function RemoveCardModal() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { name: modalName } = useSelector((state:RootState) => state.modal)

  function closeClick() {
    dispatch(closeAction())
  }

  function submitAction() {
    dispatch(editConfirmRemove())
  }
  
  return (
    <Wrapper show={modalName === SESSIONMODAL_REMOVECARD}>
      <Content>
        <Header>
          <Title>{t('removeCard.title')}</Title>
          <Action onClick={closeClick}>
            <IconSmall name="delete"/>
          </Action>          
        </Header>   
        <Actions>
          <ActionArea>
            <ButtonSecondary content={t('removeCard.negative')} action={closeClick} />
          </ActionArea>
          <ActionArea>
            <ButtonSecondary content={t('removeCard.positive')} action={submitAction} />
          </ActionArea>
        </Actions>
      </Content>
    </Wrapper>
  );
}