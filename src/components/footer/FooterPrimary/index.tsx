import React from 'react';

import { Wrapper, Content } from './styles';
import SidebarPrimary from '@components/sidebar/SidebarPrimary';

export default function FooterPrimary() {
  return (
    <Wrapper>
      <Content>
          <SidebarPrimary />
      </Content>
    </Wrapper>
  );
}