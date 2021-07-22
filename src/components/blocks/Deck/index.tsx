import React from 'react';

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Info, Quantity, Title, Opacity, Data } from './styles';

export default function Deck({ data }) {
  return (
    <Wrapper>
      <Content background={data.background}>
        <Opacity></Opacity>
        <Data>
          <Title>{data.title}</Title>
          <Info>
            <IconSmall name={data.icon} />
            <Quantity>{data.quantity}</Quantity>
          </Info>
        </Data>
      </Content>
    </Wrapper>
  );
}