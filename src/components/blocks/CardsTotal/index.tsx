import IconSmall from '@components/icons/IconSmall';
import React from 'react';

import { Wrapper, Content, Total } from './styles';

export default function CardsTotal({ size=0 }) {
  return (
    <Wrapper>
      <Content>
        <IconSmall name="user"/>
        <Total>{size}</Total>
      </Content>
    </Wrapper>
  );
}