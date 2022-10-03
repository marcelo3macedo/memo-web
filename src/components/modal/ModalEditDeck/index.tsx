import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { RootState } from '@store/modules/rootReducer';
import { initAction } from '@store/modules/deck/edit/actions';
import { navigatePush } from '@store/mods/navigate/actions';
import { PATH_REVIEW } from '@services/Navigation';
import { reviewAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Header, Title, Description, Action, Options } from './styles';
import ModalClose from '../elements/ModalClose';
import StatusPrivateDeck from '@components/status/StatusPrivateDeck';
import EditOption from '../elements/EditOption';
import RemoveOption from '../elements/RemoveOption';

export default function ModalEditDeck() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { show, target } = useSelector((state:RootState) => state.deckEdit);
  const statusTitle = target && target.isPublic ? t('session.public') : t('session.private');
  const frequencyName = target && target.frequency ? target.frequency.name : null;

  function modalCloseAction() {
    dispatch(initAction());
  }

  function reviewClick() {
    dispatch(reviewAction({ deck: target }));
    dispatch(navigatePush({ path: PATH_REVIEW }));
  }

  if (!target) {
    return <></>;
  }

   return (
    <Wrapper show={show}>
      <Content>
        <Header>
          <Title>{target.name}</Title>
          <ModalClose action={modalCloseAction} />
        </Header>
        <Description>{target.description}</Description>
        <StatusPrivateDeck frequency={frequencyName} visibility={statusTitle} />
        <Action className='review' onClick={reviewClick}>
          <ButtonPrimary content={t('decks.actions.review')}/>
        </Action>
        <Options>
          <EditOption />
          <RemoveOption />
        </Options>
      </Content>
    </Wrapper>
  );
}