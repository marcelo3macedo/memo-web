import { FeaturedText } from '@components/elements/texts/featured';
import { BaseInfoProps } from '@interfaces/elements/infos/BaseInfoProps';
import { Styles } from '@interfaces/texts/TextProps';
import { useTranslation } from 'react-i18next';

export function FrequencyInfo({ text }: BaseInfoProps) {
  const { t } = useTranslation();
  const frequency = text || t('sessions.frequencyNotSpecified');

  return <FeaturedText value={frequency} styled={Styles.Pallete02} />;
}
