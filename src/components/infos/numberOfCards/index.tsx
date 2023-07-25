import { FeaturedText } from '@components/elements/texts/featured';
import { BaseInfoProps } from '@interfaces/elements/infos/BaseInfoProps';
import { useTranslation } from 'react-i18next';

export function NumberOfCardsInfo({ text }: BaseInfoProps) {
  const { t } = useTranslation();
  const numberOfCards = text || '0';
  const value = `${numberOfCards} ${t('deck.cards')}`;

  return <FeaturedText value={value} />;
}
