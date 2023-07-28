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
import { MODAL_EDITSESSION } from '@constants/modals';
import { loadAction as loadCardsAction } from '@store/modules/card/actions';
import { loadAction } from '@store/modules/deck/actions';
import { loadAction as loadFrequenciesAction } from '@store/modules/frequencies/actions';
import { RootState } from '@store/modules/rootReducer';
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
  const [card] = useState('');

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

  function getFrequencyName(id: string) {
    if (!id || !frequencies) return;

    return (
      frequencies.find(x => x.id === id)?.name ||
      t('sessions.frequencyNotSpecified')
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
          <Action>
            <SecondaryButton
              content={t('actions.editDeck')}
              action={() => {
                openModal(MODAL_EDITSESSION);
              }}
            />
          </Action>
          <Action>
            <PrimaryButton content={t('actions.addCard')} />
          </Action>
        </Actions>

        <CardList />
      </Content>
      <EditDeckModal
        show={modal === MODAL_EDITSESSION}
        deck={deck}
        closeAction={closeModal}
      />
      <AddCardModal modal={modal} deck={deck} closeAction={closeModal} />
      <EditCardModal modal={modal} card={card} closeAction={closeModal} />
      <RemoveCardModal modal={modal} card={card} closeAction={closeModal} />
    </Wrapper>
  );
}
