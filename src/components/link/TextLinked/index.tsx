import React from 'react';

import { Wrapper, TextValue } from './styles';

export default function TextLinked({ content, action = null }) {
  return (
    <Wrapper onClick={action}>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}