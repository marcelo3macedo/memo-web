import React from 'react';

import { Wrapper, Content, Title, Description } from './styles';

export default function Item({ title, description, action = null }: any) {
  return (
    <Wrapper className='no-select' onClick={action}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
}
