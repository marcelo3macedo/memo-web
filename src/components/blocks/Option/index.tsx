import React from 'react';

import { Wrapper, Content, Title } from './styles';

export default function Option({ title, action = null }) {
  return (
    <Wrapper onClick={action}>
      <Content className='no-select'>
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}
