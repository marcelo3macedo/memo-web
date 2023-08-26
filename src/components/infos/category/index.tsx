import { FeaturedText } from '@components/elements/texts/featured';
import { BaseInfoProps } from '@interfaces/elements/infos/BaseInfoProps';
import { Styles } from '@interfaces/texts/TextProps';
import { useTranslation } from 'react-i18next';

export function CategoryInfo({ text }: BaseInfoProps) {
  const { t } = useTranslation();
  const category = text || t('sessions.categoryNotSpecified');

  return <FeaturedText value={category} styled={Styles.Pallete02} />;
}
