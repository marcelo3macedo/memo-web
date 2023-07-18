import { TitleText } from '@components/elements/texts/title';
import IconMedium from '@components/icons/IconMedium';
import { Styles } from '@interfaces/texts/TextProps';
import { useTranslation } from 'react-i18next';

import { Container } from './styles';

export function SmallLoading() {
  const { t } = useTranslation();

  return (
    <Container>
      <IconMedium name={'loading'} />
      <TitleText value={t('loading.message')} styled={Styles.Default} />
    </Container>
  );
}
