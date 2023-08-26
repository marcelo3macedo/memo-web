import { DetailsDecks } from '@components/decks/details';
import NotFound from '@components/decks/notFound';
import PrimaryButton from '@components/elements/buttons/Primary';
import SecondaryButton from '@components/elements/buttons/Secondary';
import { SmallLoading } from '@components/elements/loading/small';
import { TopHeader } from '@components/header/top';
import { CardList } from '@components/lists/cards';
import { AddCardModal } from '@components/modals/addCard';
import { EditCardModal } from '@components/modals/editCard';
import { EditDeckModal } from '@components/modals/editDeck';
import { RemoveCardModal } from '@components/modals/removeCard';
import {
  MODAL_ADDCARD,
  MODAL_EDITCARD,
  MODAL_EDITSESSION,
  MODAL_REMOVECARD
} from '@constants/modals';
import { RouteOptions } from '@interfaces/routes/SessionRoutesProps';
import { PATH_REVIEWSESSION } from '@services/Navigation';
import { loadAction as loadCardsAction } from '@store/modules/card/actions';
import { loadAction } from '@store/modules/deck/actions';
import { loadAction as loadFrequenciesAction } from '@store/modules/frequencies/actions';
import { navigatePush } from '@store/modules/navigate/actions';
import { RootState } from '@store/modules/rootReducer';
import { feedAction } from '@store/modules/session/actions';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Action, Actions, Content, Info, Wrapper } from './styles';

export function EditSession() {
  const { id } = useParams() as any;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { deck, loading } = useSelector((state: RootState) => state.deck);
  const { frequencies } = useSelector((state: RootState) => state.frequencies);
  const [modal, setModal] = useState('');
  const [card, setCard] = useState('');
  const { cards } = useSelector((state: RootState) => state.card);

  useEffect(() => {
    dispatch(loadAction({ id }));
    dispatch(loadCardsAction({ id }));
    dispatch(loadFrequenciesAction());
  }, [dispatch, id]);

  function closeModal() {
    setModal('');
  }

  function openModal(m: string) {
    setModal(m);
  }

  function editCardAction(c) {
    setCard(c);
    openModal(MODAL_EDITCARD);
  }

  function removeCardAction(c) {
    setCard(c);
    openModal(MODAL_REMOVECARD);
  }

  function getFrequencyName(id: string) {
    if (!id || !frequencies) return;

    return (
      frequencies.find(x => x.id === id)?.name ||
      t('sessions.frequencyNotSpecified')
    );
  }

  function reviewSession() {
    dispatch(feedAction({ deckId: id }));
    dispatch(
      navigatePush({
        route: RouteOptions.review,
        path: PATH_REVIEWSESSION
      })
    );
  }

  if (loading) {
    return <SmallLoading />;
  }
  if (!deck) {
    return <NotFound />;
  }

  const { name, description, frequencyId } = deck as any;
  const frequencyName = getFrequencyName(frequencyId);
  return (
    <Wrapper>
      <Content>
        <TopHeader title={name} description={description} />

        <Info>
          <DetailsDecks title={t('sessions.frequency')} value={frequencyName} />
        </Info>

        <Actions>
          {cards && cards.length > 0 ? (
            <Action>
              <PrimaryButton
                content={t('actions.review')}
                action={reviewSession}
              />
            </Action>
          ) : (
            <></>
          )}
        </Actions>

        <Actions>
          <Action>
            <SecondaryButton
              content={t('actions.editDeck')}
              action={() => {
                openModal(MODAL_EDITSESSION);
              }}
            />
          </Action>
          <Action>
            <PrimaryButton
              content={t('actions.addCard')}
              action={() => {
                openModal(MODAL_ADDCARD);
              }}
            />
          </Action>
        </Actions>

        <CardList editCard={editCardAction} removeCard={removeCardAction} />
      </Content>
      <EditDeckModal
        show={modal === MODAL_EDITSESSION}
        deck={deck}
        closeAction={closeModal}
      />
      <AddCardModal
        show={modal === MODAL_ADDCARD}
        deck={deck}
        closeAction={closeModal}
      />
      <EditCardModal
        show={modal === MODAL_EDITCARD}
        card={card}
        closeAction={closeModal}
      />
      <RemoveCardModal
        show={modal === MODAL_REMOVECARD}
        card={card}
        closeAction={closeModal}
      />
    </Wrapper>
  );
}
