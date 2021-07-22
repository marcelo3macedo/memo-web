import React from 'react';

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Header, Info, Title, Value } from './styles';

export default function InfoWithIcon({ data }) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <IconSmall name={data.icon}/>
        </Header>
        <Info>
          <Title>{data.title}</Title>
          <Value>{data.value}</Value>
        </Info>
      </Content>
    </Wrapper>
  );
}