import { SubtitleText } from '@components/elements/texts/subtitle';
import IconHigh from '@components/icons/IconHigh';
import { useTranslation } from 'react-i18next';

import { Block, Container } from './styles';

export function SmallLoading() {
  const { t } = useTranslation();

  return (
    <Container>
      <IconHigh name={'loading'} />
      <Block>
        <SubtitleText value={t('loading.message')} />
      </Block>
    </Container>
  );
}
