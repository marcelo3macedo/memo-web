import { TitleText } from '@components/elements/texts/title';
import { BaseInfoProps } from '@interfaces/elements/infos/BaseInfoProps';

export function VisibilityInfo({ text }: BaseInfoProps) {
  return <TitleText value={text} />;
}
