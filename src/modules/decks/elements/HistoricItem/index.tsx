import React from 'react';

import { Wrapper, Content, Title, Description } from './styles';

export default function HistoricItem({ title, description }:any) {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Wrapper>
  );
}