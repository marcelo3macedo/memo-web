import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import Gallery from '@components/cards/Gallery';
import { RootState } from '@store/modules/rootReducer';
import { openModalAction } from '@store/modules/card/actions';
import { editAction } from '@store/modules/deck/actions';
import ModalEditCard from '@components/modal/ModalEditCard';
import ModalAddCard from '@components/modal/ModalAddCard';
import ModalTitleDeck from '@components/modal/ModalTitleDeck';
import ModalRemoveCard from '@components/modal/ModalRemoveCard';
import ButtonPrimary from '@components/button/ButtonPrimary';
import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Title, Header, PageTitle, EditTitle, NewCard, Frequency, FrequencyTitle, FrequencyOptions } from './styles';

export default function EditDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const deck = useSelector((state:RootState) => state.personal.deck);
  const frequency = useSelector((state:RootState) => state.deck.frequency);
  
  function editTitleClick() {
    dispatch(openModalAction('edit-title'))
  }

  function addCardClick() {
    dispatch(openModalAction('add-card'))
  }

  function frequencyChanged(event) {
    const frequencyId = event.target.value
    
    dispatch(editAction({
      id: deck.id,
      name: deck.name,
      frequencyId
    }))
  }

  if (!deck) {
    return <></>
  }

  return (
    <Wrapper>
      <Content>
        <PageTitle>{t('editDeck.title')}</PageTitle>
        <Header>          
          <Title>{deck.name}</Title>
          <EditTitle onClick={editTitleClick}>
            <IconSmall name="edit"></IconSmall>
          </EditTitle>
        </Header>
        <Frequency>
          <FrequencyTitle>{t('decks.frequency')}</FrequencyTitle>

          <FrequencyOptions name={"frequencyId"} defaultValue={deck.frequencyId} onChange={frequencyChanged}>
            {frequency ? frequency.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>  
            )) : <></>}
          </FrequencyOptions>
        </Frequency>
        <NewCard>
          <ButtonPrimary content={t('actions.addCard')} action={addCardClick}></ButtonPrimary>
        </NewCard>
        <Gallery cards={deck.cards} type="private" />

        <ModalAddCard />
        <ModalEditCard />
        <ModalRemoveCard />
        <ModalTitleDeck />
      </Content>
    </Wrapper>
  ); 
}