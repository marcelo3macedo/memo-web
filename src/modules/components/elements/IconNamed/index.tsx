import IconSmall from '@components/icons/IconSmall';
import React from 'react';

import { Wrapper, Content, Title } from './styles';

export default function IconNamed({ icon, title }: any) {
  return (
    <Wrapper>
      <Content>
        <IconSmall name={icon} />
        <Title>{title}</Title>
      </Content>
    </Wrapper>
  );
}
