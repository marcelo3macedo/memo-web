import { Styles, TextProps } from '@interfaces/texts/TextProps';

import { Text } from './styles';

export function SubtitleText({ value, styled = Styles.Default }: TextProps) {
  const lines = value.toString().split('|');

  return lines.map((l, i) => (
    <Text key={i} styleName={styled}>
      {l}
    </Text>
  ));
}
