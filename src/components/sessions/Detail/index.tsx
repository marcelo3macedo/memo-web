import React from 'react';
import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Title } from './styles';

export default function Detail({ icon, title }) {
  if (!title) return <></>
  
  return (
    <Wrapper>
      <Content>
          <IconSmall name={icon} />
          <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}