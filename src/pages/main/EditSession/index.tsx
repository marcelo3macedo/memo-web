import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { SESSIONMODAL_ADDCARD, SESSIONMODAL_EDITCARD, SESSIONMODAL_REMOVECARD, SESSIONMODAL_TITLEDECK } from '@constants/SessionModal';
import Gallery from '@components/cards/Gallery';
import AddCardModal from '@modules/modals/elements/AddCardModal';
import EditDeckModal from '@modules/modals/elements/EditDeckModal';
import EditHeader from '@modules/blocks/elements/EditHeader';
import ButtonPrimary from '@components/button/ButtonPrimary';
import LoadingPage from '@modules/loading/elements/LoadingPage';
import EditCardModal from '@modules/modals/elements/EditCardModal';
import { RootState } from '@store/modules/rootReducer';
import { addCard, deleteCardAction, editAction, updateCardAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Action, Frequency, FrequencyTitle, FrequencyOptions } from './styles';
import RemoveCardModal from '@modules/modals/elements/RemoveCardModal';

export default function EditSession() {
  const dispatch = useDispatch();
  const t = useTranslation();

  const [ modal, setModal ] = useState("");
  const [ card, setCard ] = useState("");
  const { deck } = useSelector((state:RootState) => state.deck);
  const { all:frequencies, default: defaultFrequency } = useSelector((state:RootState) => state.frequencies);
  const selectedFrequency = deck && deck.frequencyId ? deck.frequencyId : defaultFrequency;
  const cardsActions = {
    open: openCardModal
  };
  
  if (!deck) {
    return <LoadingPage />;
  }

  function openModal({ screen }) {
    setModal(screen);
  }

  function openCardModal({ screen, card=null }) {
    openModal({ screen });
    setCard(card);
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

  function addCardSubmit(card, { resetForm }) {
    resetForm();
    dispatch(addCard({ deck, card }));
    closeModal();
  }

  function editCardSubmit(card) {
    dispatch(updateCardAction({ card }));
    closeModal();
  }

  function removeCardSubmit() {
    dispatch(deleteCardAction({ card }));
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
          <ButtonPrimary content={t('actions.addCard')} action={ () => { openCardModal({ screen: SESSIONMODAL_ADDCARD }) }}></ButtonPrimary>
        </Action>
        <Gallery cards={deck.cards} type="private" actions={cardsActions}/>

        <EditDeckModal show={modal === SESSIONMODAL_TITLEDECK} deck={deck} submitAction={titleDeckSubmit} closeAction={closeModal} />
        <AddCardModal show={modal === SESSIONMODAL_ADDCARD} submitAction={addCardSubmit} closeAction={closeModal} />
        <EditCardModal show={modal === SESSIONMODAL_EDITCARD} card={card} submitAction={editCardSubmit} closeAction={closeModal} />
        <RemoveCardModal show={modal === SESSIONMODAL_REMOVECARD} submitAction={removeCardSubmit} closeAction={closeModal} />
      </Content>
    </Wrapper>
  ); 
}