import SecondaryButton from '@components/elements/buttons/Secondary';
import { TitleText } from '@components/elements/texts/title';
import { CONFIGMODAL_LANGUAGEM } from '@constants/configModal';
import { updateAction } from '@store/modules/config/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Header, Item, Modal } from './styles';

export function LanguageModal({ modal, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { languageAvailable } = useSelector((state: RootState) => state.config);

  if (!languageAvailable) {
    return <></>;
  }

  function getName(value: string) {
    return t(`language.${value}`);
  }

  function changeLanguage(value: string) {
    dispatch(updateAction({ target: 'language', value }));
    closeAction();
  }

  return (
    <Container show={modal === CONFIGMODAL_LANGUAGEM}>
      <Modal>
        <Header>
          <TitleText value={t('language.title')} />
        </Header>

        {languageAvailable.map((s: any, i: number) => (
          <Item key={i}>
            <SecondaryButton
              content={getName(s)}
              action={() => {
                changeLanguage(s);
              }}
            />
          </Item>
        ))}
      </Modal>
    </Container>
  );
}
