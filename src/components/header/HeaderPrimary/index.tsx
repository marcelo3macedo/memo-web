import React from 'react';

import { Wrapper, Content } from './styles';
import IconMedium from '@components/icons/IconMedium';

export default function HeaderPrimary() {
  return (
    <Wrapper>
      <Content>
          <IconMedium name="home" />
          <IconMedium name="home" />        
      </Content>
    </Wrapper>
  );
}