import { TitleText } from '@components/elements/texts/title';
import { useTranslation } from 'react-i18next';

import { Container, Modal } from './styles';

export function EditCardModal() {
  const { t } = useTranslation();

  return (
    <Container>
      <Modal>
        <TitleText value={t('modal.add')} />
      </Modal>
    </Container>
  );
}
