import ButtonPrimary from '@components/button/ButtonPrimary';
import ButtonSecondary from '@components/button/ButtonSecondary';
import {
  SESSIONMODAL_ADDCARD,
  SESSIONMODAL_TITLEDECK,
} from '@constants/SessionModal';
import EditCards from '@modules/blocks/elements/EditCards';
import EditComboBox from '@modules/frequencies/elements/EditComboBox';
import PageHeader from '@modules/headers/elements/PageHeader';
import LoadingPage from '@modules/loading/elements/LoadingPage';
import AddCardModal from '@modules/modals/elements/AddCardModal';
import EditCardModal from '@modules/modals/elements/EditCardModal';
import EditDeckModal from '@modules/modals/elements/EditDeckModal';
import RemoveCardModal from '@modules/modals/elements/RemoveCardModal';
import { openAction } from '@store/mods/modals/actions';
import { loadAction } from '@store/mods/options/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import { Action, ActionButton, Content, Modals, Wrapper } from './styles';

export default function EditSession() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { selected } = useSelector((state: RootState) => state.decks);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (!selected) {
    return <LoadingPage />;
  }

  function editHeaderClick() {
    dispatch(openAction({ name: SESSIONMODAL_TITLEDECK }));
  }

  function addCardClick() {
    dispatch(openAction({ name: SESSIONMODAL_ADDCARD }));
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={selected.name} subTitle={selected.description} />
        <EditComboBox deck={selected} />
        <Action>
          <ActionButton>
            <ButtonSecondary
              content={t('actions.editTitle')}
              action={editHeaderClick}
            />
          </ActionButton>
          <ActionButton>
            <ButtonPrimary
              content={t('actions.addCard')}
              action={addCardClick}
            />
          </ActionButton>
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
