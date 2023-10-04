import { TitleText } from '@components/elements/texts/title';
import { Items } from '@components/messages/items';
import { getByType } from '@helpers/message/type';
import { useTranslation } from 'react-i18next';

import { Container, Header, Modal } from './styles';

export function MessageTypeModal({ show, slug, closeAction }: any) {
  const { t } = useTranslation();
  const categories = getByType(slug);

  function onDismiss() {
    closeAction();
  }

  return (
    <Container show={show} onClick={onDismiss}>
      <Modal>
        <Header>
          <TitleText value={t('message.title')} />
        </Header>
        <Items data={categories} slug={slug} />
      </Modal>
    </Container>
  );
}
