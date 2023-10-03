import { Styles, ValueProps } from '@interfaces/elements/inputs/ValueProps';
import { useRef } from 'react';
import { useTheme } from 'styled-components';

import { TextInput } from './styles';

export function ValueAnimatedInput({
  value,
  placeholder,
  onChangeText,
  onEndEditing,
  styled = Styles.Default
}: ValueProps) {
  const theme = useTheme() as any;
  const inputRef = useRef(null);

  function onKeyDownHandler(e) {
    if (e.key === 'Enter') {
      inputRef.current.blur();
    }
  }

  return (
    <TextInput
      ref={inputRef}
      value={value}
      placeholder={placeholder}
      styleName={styled}
      onChange={onChangeText}
      onKeyDown={onKeyDownHandler}
      onBlur={onEndEditing}
      placeholderTextColor={theme.PRIMARY_COLOR}
    />
  );
}
