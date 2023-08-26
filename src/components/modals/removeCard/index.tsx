import PrimaryButton from '@components/elements/buttons/Primary';
import SecondaryButton from '@components/elements/buttons/Secondary';
import { TitleText } from '@components/elements/texts/title';
import IconMedium from '@components/icons/IconMedium';
import { removeAction } from '@store/modules/card/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import {
  Action,
  Actions,
  CloseArea,
  Container,
  Content,
  Header,
  Modal
} from './styles';

export function RemoveCardModal({ show, card, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function confirmHandler() {
    dispatch(removeAction({ id: card.id }));
    closeAction();
  }

  function cancelHandler() {
    closeAction();
  }

  return (
    <Container show={show}>
      <Modal>
        <Header>
          <TitleText value={t('modal.remove')} />
          <CloseArea onClick={closeAction}>
            <IconMedium name={'close'} />
          </CloseArea>
        </Header>

        <Content>
          <TitleText value={t('card.confirmRemove')} />
          <Actions>
            <Action>
              <SecondaryButton
                content={t('modal.optionNo')}
                action={cancelHandler}
              />
            </Action>
            <Action>
              <PrimaryButton
                content={t('modal.optionYes')}
                action={confirmHandler}
              />
            </Action>
          </Actions>
        </Content>
      </Modal>
    </Container>
  );
}
