import React from 'react';

import { Wrapper, TextValue } from './styles';

export default function ButtonSecondary({ content, action=null }) {
  return (
    <Wrapper onClick={action} className='no-select'>
      <TextValue>{content}</TextValue>
    </Wrapper>
  );
}