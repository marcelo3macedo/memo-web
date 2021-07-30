import React from 'react';

import { Wrapper, TextValue } from './styles';

export default function ButtonPrimary({ content, type=null, action=null }) {
  return (
    <Wrapper type={type ?? 'button'} onClick={action}>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}