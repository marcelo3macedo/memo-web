import React from 'react';

import { Wrapper, Content, Title, Description } from './styles';

export default function SessionItem({ title, description, layout = 'middle' }) {
  return (
    <Wrapper layout={layout}>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
}
