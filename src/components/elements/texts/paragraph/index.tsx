import { TextProps } from '@interfaces/texts/TextProps';

import { Text } from './styles';

export function ParagraphText({ value }: TextProps) {
  return <Text>{value}</Text>;
}
