import React from 'react';

import { Wrapper, TextValue } from './styles';

export default function ButtonPrimary({ content }) {
  return (
    <Wrapper>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}