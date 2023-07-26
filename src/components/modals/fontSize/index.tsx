import SecondaryButton from '@components/elements/buttons/Secondary';
import { TitleText } from '@components/elements/texts/title';
import { CONFIGMODAL_FONT } from '@constants/configModal';
import { updateAction } from '@store/modules/config/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Header, Item, Modal } from './styles';

export function FontSizeModal({ modal, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { fontAvailable } = useSelector((state: RootState) => state.config);

  if (!fontAvailable) {
    return <></>;
  }

  function getName(value: string) {
    return t(`font.${value}`);
  }

  function changeFont(value: string) {
    dispatch(updateAction({ target: 'fontSize', value }));
    closeAction();
  }

  return (
    <Container show={modal === CONFIGMODAL_FONT} onClick={closeAction}>
      <Modal>
        <Header>
          <TitleText value={t('modal.fontSize')} />
        </Header>

        {fontAvailable.map((s: any) => (
          <Item>
            <SecondaryButton
              content={getName(s)}
              action={() => {
                changeFont(s);
              }}
            />
          </Item>
        ))}
      </Modal>
    </Container>
  );
}
