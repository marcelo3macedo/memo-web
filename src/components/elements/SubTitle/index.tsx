import React from 'react';

import { Wrapper, Content } from './styles';

export default function SubTitle({ title }) {
  return (
    <Wrapper>
      <Content>{ title }</Content>
    </Wrapper>
  );
}