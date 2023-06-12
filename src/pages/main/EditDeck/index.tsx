import ButtonPrimary from '@components/button/ButtonPrimary';
import Gallery from '@components/cards/Gallery';
import IconSmall from '@components/icons/IconSmall';
import PageLoading from '@components/loading/PageLoading';
import ModalAddCard from '@components/modal/ModalAddCard';
import ModalEditCard from '@components/modal/ModalEditCard';
import ModalRemoveCard from '@components/modal/ModalRemoveCard';
import ModalTitleDeck from '@components/modal/ModalTitleDeck';
import {
  addCard,
  deleteCardAction,
  editAction,
  updateCardAction,
} from '@store/modules/deck/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import {
  Wrapper,
  Content,
  Title,
  Header,
  PageTitle,
  EditTitle,
  NewCard,
  Frequency,
  FrequencyTitle,
  FrequencyOptions,
  Info,
  Description,
  EditText,
} from './styles';

export default function EditDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();

  const [modal, setModal] = useState('');
  const [card, setCard] = useState('');
  const { deck } = useSelector((state: RootState) => state.deck);
  const { all: frequencies, default: defaultFrequency } = useSelector(
    (state: RootState) => state.frequencies
  );
  const selectedFrequency =
    deck && deck.frequencyId ? deck.frequencyId : defaultFrequency;
  const cardsActions = {
    open: openCardModal,
  };

  if (!deck) {
    return <PageLoading />;
  }

  function openModal({ screen }) {
    setModal(screen);
  }

  function openCardModal({ screen, card = null }) {
    openModal({ screen });
    setCard(card);
  }

  function closeModal() {
    setModal('');
  }

  function titleDeckSubmit(deck) {
    const payload = {
      deck,
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
      deck: Object.assign({}, deck),
    };

    payload.deck.frequencyId = event.target.value;
    dispatch(editAction(payload));
  }

  return (
    <Wrapper>
      <Content>
        <PageTitle>{t('editDeck.title')}</PageTitle>
        <Header>
          <Info>
            <Title>{deck.name}</Title>
            <Description>{deck.description}</Description>
          </Info>
          <EditTitle
            onClick={() => {
              openModal({ screen: 'title-deck' });
            }}>
            <IconSmall name='edit'></IconSmall>
            <EditText>{t('decks.actions.edit')}</EditText>
          </EditTitle>
        </Header>
        <Frequency>
          <FrequencyTitle>{t('decks.frequency')}</FrequencyTitle>

          <FrequencyOptions
            name={'frequencyId'}
            defaultValue={selectedFrequency}
            onChange={frequencyChanged}>
            {frequencies ? (
              frequencies.map(f => (
                <option key={f.id} value={f.id}>
                  {f.name}
                </option>
              ))
            ) : (
              <></>
            )}
          </FrequencyOptions>
        </Frequency>
        <NewCard>
          <ButtonPrimary
            content={t('actions.addCard')}
            action={() => {
              openCardModal({ screen: 'add-card' });
            }}></ButtonPrimary>
        </NewCard>
        <Gallery cards={deck.cards} type='private' actions={cardsActions} />

        <ModalTitleDeck
          show={modal === 'title-deck'}
          deck={deck}
          submitAction={titleDeckSubmit}
          closeAction={closeModal}
        />
        <ModalAddCard
          show={modal === 'add-card'}
          submitAction={addCardSubmit}
          closeAction={closeModal}
        />
        <ModalEditCard
          show={modal === 'edit-card'}
          card={card}
          submitAction={editCardSubmit}
          closeAction={closeModal}
        />
        <ModalRemoveCard
          show={modal === 'remove-card'}
          submitAction={removeCardSubmit}
          closeAction={closeModal}
        />
      </Content>
    </Wrapper>
  );
}
