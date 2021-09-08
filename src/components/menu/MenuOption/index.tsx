import React from 'react';

import IconSmall from "@components/icons/IconSmall";
import { Wrapper, Content, Header, Info, Title } from './styles';

export default function MenuOption({ icon, content, action=null }) {
  return (
    <Wrapper className="no-select" onClick={action}>
      <Content>
        <Header>
          <IconSmall name={icon}/>
        </Header>
        <Info>
          <Title>{content}</Title>
        </Info>
      </Content>
    </Wrapper>
  );
}