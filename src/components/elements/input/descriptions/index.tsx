import { Styles, ValueProps } from '@interfaces/elements/inputs/ValueProps';
import { useTheme } from 'styled-components';

import { TextInput } from './styles';

export function DescriptionsInput({
  value,
  placeholder,
  onChangeText,
  styled = Styles.Default
}: ValueProps) {
  const theme = useTheme() as any;
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      styleName={styled}
      onChange={onChangeText}
      multiline={true}
      numberOfLines={1}
      placeholderTextColor={theme.PRIMARY_COLOR}
    />
  );
}
