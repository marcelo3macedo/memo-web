import React from 'react';
import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Title, Item } from './styles';

export default function Details({ cardNumber, passedTime }) {
  return (
    <Wrapper>
      <Content>
        <Item>
          <IconSmall name={'card'} />
          <Title>{cardNumber}</Title>
        </Item>
        <Item>
          <IconSmall name={'time'} />
          <Title>{passedTime}</Title>
        </Item>          
      </Content>
    </Wrapper>
  );
}