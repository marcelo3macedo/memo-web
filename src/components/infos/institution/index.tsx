import { FeaturedText } from '@components/elements/texts/featured';
import { BaseInfoProps } from '@interfaces/elements/infos/BaseInfoProps';
import { Styles } from '@interfaces/texts/TextProps';
import { useTranslation } from 'react-i18next';

export function InstitutionInfo({ text }: BaseInfoProps) {
  const { t } = useTranslation();
  const institution = text || t('sessions.institutionNotSpecified');

  return <FeaturedText value={institution} styled={Styles.Pallete02} />;
}
