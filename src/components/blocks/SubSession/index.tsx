import React from 'react';
import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Title, Info, Quantity } from './styles';

export default function SubSession({ data }) {
  const icon = "card";
  
  return (
    <Wrapper>
      <Content>
        <Title>{data.name}</Title>
        <Info>
          <IconSmall name={icon} />
          <Quantity>{data.cardsCount}</Quantity>
        </Info>
      </Content>
    </Wrapper>
  );
}