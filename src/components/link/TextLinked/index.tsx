import React from 'react';

import { Wrapper, TextValue } from './styles';

export default function TextLinked({ content }) {
  return (
    <Wrapper>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}