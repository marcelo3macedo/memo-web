import { FeaturedText } from '@components/elements/texts/featured';
import { BaseInfoProps } from '@interfaces/elements/infos/BaseInfoProps';
import { Styles } from '@interfaces/texts/TextProps';

export function VisibilityInfo({ text }: BaseInfoProps) {
  return <FeaturedText value={text} styled={Styles.Pallete02} />;
}
