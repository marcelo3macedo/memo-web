import PrimaryButton from '@components/elements/buttons/Primary';
import { ParagraphText } from '@components/elements/texts/paragraph';
import { TitleText } from '@components/elements/texts/title';
import { useTranslation } from 'react-i18next';

import { Container, Item } from './styles';

export function ContactHelp() {
  const { t } = useTranslation();

  function contactHandler() {
    window.open(
      `${process.env.REACT_APP_WHATSAPP_ENDPOINT}${process.env.REACT_APP_CONTACT_WHATSAPP}`
    );
  }

  return (
    <Container>
      <Item>
        <TitleText value={t('contact.mail')} />
        <ParagraphText value={t('contact.available')} />
      </Item>
      <Item>
        <PrimaryButton
          content={t('contact.contact_whatsApp')}
          action={contactHandler}
        />
      </Item>
    </Container>
  );
}
