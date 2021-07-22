import React from 'react';

import { Wrapper, Content } from './styles';
import IconMedium from '@components/icons/IconMedium';
import IconFeatured from '@components/icons/IconFeatured';

export default function SidebarPrimary() {
  return (
    <Wrapper>
        <Content>
          <IconMedium name="home" />
          <IconMedium name="home" />
          <IconFeatured name="logo" />
          <IconMedium name="home" />
          <IconMedium name="home" />
        </Content>
    </Wrapper>
  );
}