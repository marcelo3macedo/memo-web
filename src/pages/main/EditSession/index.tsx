import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { SESSIONMODAL_ADDCARD, SESSIONMODAL_TITLEDECK } from '@constants/SessionModal';
import ButtonPrimary from '@components/button/ButtonPrimary';
import AddCardModal from '@modules/modals/elements/AddCardModal';
import EditDeckModal from '@modules/modals/elements/EditDeckModal';
import EditHeader from '@modules/blocks/elements/EditHeader';
import LoadingPage from '@modules/loading/elements/LoadingPage';
import EditCardModal from '@modules/modals/elements/EditCardModal';
import RemoveCardModal from '@modules/modals/elements/RemoveCardModal';
import EditComboBox from '@modules/frequencies/elements/EditComboBox';
import EditCards from '@modules/blocks/elements/EditCards';
import { RootState } from '@store/modules/rootReducer';
import { openAction } from '@store/mods/modals/actions';
import { loadAction } from '@store/mods/options/actions';

import { Wrapper, Content, Action, Modals } from './styles';

export default function EditSession() {
  const dispatch = useDispatch()
  const t = useTranslation()
  const { selected } = useSelector((state:RootState) => state.decks)

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (!selected) {
    return <LoadingPage />;
  }

  function editHeaderClick() {
    dispatch(openAction({ name: SESSIONMODAL_TITLEDECK }))
  }

  function addCardClick() {
    dispatch(openAction({ name: SESSIONMODAL_ADDCARD }))
  }

  return (
    <Wrapper>
      <Content>
        <EditHeader name={selected.name} description={selected.description} action={editHeaderClick} />
        <EditComboBox deck={selected} />
        <Action>
          <ButtonPrimary content={t('actions.addCard')} action={addCardClick}></ButtonPrimary>
        </Action>
        <EditCards />
      </Content>
      <Modals>
        <EditDeckModal />
        <AddCardModal />
        <EditCardModal />
        <RemoveCardModal />
      </Modals>
    </Wrapper>
  ); 
}