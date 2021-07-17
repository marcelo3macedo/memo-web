import React from 'react';

import { Wrapper, TextValue } from './styles';

export default function ButtonSecondary({ content }) {
  return (
    <Wrapper>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}