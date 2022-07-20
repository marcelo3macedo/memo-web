import React from 'react';

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Header, Info, Title, Value } from './styles';

export default function InfoWithIcon({ data }) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Value>{data.value}</Value>
        </Header>
        <Info>
          <Title>{data.title}</Title>
        </Info>
      </Content>
    </Wrapper>
  );
}