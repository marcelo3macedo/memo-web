import React from 'react';

import { Wrapper, Content } from './styles';

export default function SubTitle({ title }:any) {
  return (
    <Wrapper>
      <Content>{ title }</Content>
    </Wrapper>
  );
}