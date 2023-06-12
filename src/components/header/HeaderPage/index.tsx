import React from 'react';

import { Wrapper, Content, Title, Message } from './styles';

export default function HeaderPage({ title, subTitle }) {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Message>{subTitle}</Message>
      </Content>
    </Wrapper>
  );
}
