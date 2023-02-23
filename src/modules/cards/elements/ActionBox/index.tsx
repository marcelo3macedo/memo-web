import React from 'react';

import { Wrapper, Content, Title, Action } from './styles';

export default function ActionBox({ action, title }:any) {
  return (
    <Wrapper className='no-select' onClick={action}>
      <Content>
        <Action>
          <Title>{title}</Title>
        </Action>
      </Content>
    </Wrapper>
  );
}