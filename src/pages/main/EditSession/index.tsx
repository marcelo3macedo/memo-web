import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { SESSIONMODAL_ADDCARD, SESSIONMODAL_TITLEDECK } from '@constants/SessionModal';
import AddCardModal from '@modules/modals/elements/AddCardModal';
import EditDeckModal from '@modules/modals/elements/EditDeckModal';
import EditHeader from '@modules/blocks/elements/EditHeader';
import ButtonPrimary from '@components/button/ButtonPrimary';
import LoadingPage from '@modules/loading/elements/LoadingPage';
import EditCardModal from '@modules/modals/elements/EditCardModal';
import RemoveCardModal from '@modules/modals/elements/RemoveCardModal';
import { RootState } from '@store/modules/rootReducer';
import { editAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Action, Frequency, FrequencyTitle, FrequencyOptions } from './styles';
import EditCards from '@modules/blocks/elements/EditCards';
import { openAction } from '@store/mods/modals/actions';

export default function EditSession() {
  const dispatch = useDispatch();
  const t = useTranslation();

  const [ modal, setModal ] = useState("");
  const { deck } = useSelector((state:RootState) => state.deck);
  const { all:frequencies, default: defaultFrequency } = useSelector((state:RootState) => state.frequencies);
  const selectedFrequency = deck && deck.frequencyId ? deck.frequencyId : defaultFrequency;
  
  if (!deck) {
    return <LoadingPage />;
  }

  function openModal({ screen }) {
    setModal(screen);
  }

  
  function closeModal() {
    setModal("");
  }

  function titleDeckSubmit(deck) {
    const payload = {
      deck
    };

    dispatch(editAction(payload));
    closeModal();
  }

  function frequencyChanged(event) {
    const payload = {
      deck: Object.assign({}, deck)
    };

    payload.deck.frequencyId = event.target.value;
    dispatch(editAction(payload));
  }

  function editHeaderClick() {
    openModal({ screen: SESSIONMODAL_TITLEDECK })
  }

  function addCardClick() {
    dispatch(openAction({ name: SESSIONMODAL_ADDCARD }))
  }

  return (
    <Wrapper>
      <Content>
        <EditHeader name={deck.name} description={deck.description} action={editHeaderClick} />
        
        <Frequency>
          <FrequencyTitle>{t('decks.frequency')}</FrequencyTitle>
          <FrequencyOptions name={"frequencyId"} defaultValue={selectedFrequency} onChange={frequencyChanged}>
            {frequencies ? frequencies.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>  
            )) : <></>}
          </FrequencyOptions>
        </Frequency>
        <Action>
          <ButtonPrimary content={t('actions.addCard')} action={addCardClick}></ButtonPrimary>
        </Action>
        <EditCards cards={deck.cards} />
        
        <EditDeckModal show={modal === SESSIONMODAL_TITLEDECK} deck={deck} submitAction={titleDeckSubmit} closeAction={closeModal} />
        <AddCardModal deckId={''} />
        <EditCardModal />
        <RemoveCardModal />
      </Content>
    </Wrapper>
  ); 
}