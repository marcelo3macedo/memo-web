import { Styles, TextProps } from '@interfaces/texts/TextProps';

import { Text } from './styles';

export function SubtitleText({ value, styled = Styles.Default }: TextProps) {
  return <Text styleName={styled}>{value}</Text>;
}
