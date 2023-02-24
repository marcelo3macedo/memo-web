import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import ModalClose from '../elements/ModalClose';
import ExtraOptions from '../elements/ExtraOptions';
import StatusPrivateDeck from '@components/status/StatusPrivateDeck';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { SESSIONMODAL_EDITDECK } from '@constants/SessionModal';
import { RootState } from '@store/modules/rootReducer';
import { closeAction } from '@store/mods/modals/actions';
import { navigatePush } from '@store/mods/navigate/actions';
import { reviewAction } from '@store/modules/deck/actions';
import { PATH_REVIEW } from '@services/Navigation';

import { Wrapper, Content, Header, Title, Description, Action, Options } from './styles';
import ShareOptions from '../elements/ShareOptions';

export default function ModalEditDeck() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { name } = useSelector((state:RootState) => state.modal)
  const { selected } = useSelector((state:RootState) => state.decks)
  const show = (name === SESSIONMODAL_EDITDECK)
  const statusTitle = selected && selected.isPublic ? t('session.public') : t('session.private');
  const frequencyName = selected && selected.frequency ? selected.frequency.name : null;
  const isDisabled = (!selected || selected.cardsCount === 0) ? true : false;

  function modalCloseAction() {
    dispatch(closeAction());
  }

  function reviewClick() {
    if (isDisabled) return;
    
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
          <ButtonPrimary content={t('decks.actions.reviewNow')} disabled={isDisabled}/>
        </Action>
        <Options>
          <ExtraOptions id={selected.id} />
        </Options>
        <ShareOptions session={selected} />
      </Content>
    </Wrapper>
  );
}