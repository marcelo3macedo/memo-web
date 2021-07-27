import IconSmall from '@components/icons/IconSmall';
import React from 'react';

import { Wrapper, Content, Total } from './styles';

export default function CardsTotal() {
  return (
    <Wrapper>
      <Content>
        <IconSmall name="user"/>
        <Total>100</Total>
      </Content>
    </Wrapper>
  );
}