import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { closeAction } from '@store/mods/modals/actions';
import { navigatePush } from '@store/mods/navigate/actions';
import { PATH_REVIEW } from '@services/Navigation';
import { reviewAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Header, Title, Description, Action, Options } from './styles';
import ModalClose from '../elements/ModalClose';
import StatusPrivateDeck from '@components/status/StatusPrivateDeck';
import EditOption from '../elements/EditOption';
import RemoveOption from '../elements/RemoveOption';
import { SESSIONMODAL_EDITDECK } from '@constants/SessionModal';

export default function ModalEditDeck() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { name } = useSelector((state:RootState) => state.modal)
  const { selected } = useSelector((state:RootState) => state.decks)
  const show = (name === SESSIONMODAL_EDITDECK)
  const statusTitle = selected && selected.isPublic ? t('session.public') : t('session.private');
  const frequencyName = selected && selected.frequency ? selected.frequency.name : null;

  function modalCloseAction() {
    dispatch(closeAction());
  }

  function reviewClick() {
    dispatch(reviewAction({ deck: selected }));
    dispatch(navigatePush({ path: PATH_REVIEW }));
  }

  if (!selected) {
    return <></>;
  }

   return (
    <Wrapper show={show}>
      <Content>
        <Header>
          <Title>{selected.name}</Title>
          <ModalClose action={modalCloseAction} />
        </Header>
        <Description>{selected.description}</Description>
        <StatusPrivateDeck frequency={frequencyName} visibility={statusTitle} />
        <Action className='review' onClick={reviewClick}>
          <ButtonPrimary content={t('decks.actions.review')}/>
        </Action>
        <Options>
          <EditOption id={selected.id} />
          <RemoveOption id={selected.id} />
        </Options>
      </Content>
    </Wrapper>
  );
}