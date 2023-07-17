import { Styles, ValueProps } from '@interfaces/elements/inputs/ValueProps';
import { useTheme } from 'styled-components';

import { TextInput } from './styles';

export function ValueInput({
  value,
  placeholder,
  onChangeText,
  onEndEditing,
  styled = Styles.Default
}: ValueProps) {
  const theme = useTheme() as any;
  return (
    <TextInput
      value={value}
      placeholder={placeholder}
      styleName={styled}
      onChangeText={onChangeText}
      onEndEditing={onEndEditing}
      placeholderTextColor={theme.PRIMARY_COLOR}
    />
  );
}
