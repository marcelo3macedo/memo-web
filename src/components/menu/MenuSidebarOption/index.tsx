import React from 'react';

import IconMedium from '@components/icons/IconMedium';

import { Wrapper, Content, Header, Info, Title } from './styles';

export default function MenuSidebarOption({ icon, content, action=null }) {
  return (
    <Wrapper className="no-select" onClick={action}>
      <Content>
        <Header>
          <IconMedium name={icon}/>
        </Header>
        <Info className='options'>
          <Title>{content}</Title>
        </Info>
      </Content>
    </Wrapper>
  );
}