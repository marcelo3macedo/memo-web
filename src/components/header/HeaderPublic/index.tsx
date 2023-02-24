import React from 'react';

import logo from "@assets/logos/logo-named.png";

import { Wrapper, Content, Picture } from './styles';

export default function HeaderPublic() {
  
  return (
    <Wrapper>
      <Content>
        <Picture src={logo}/>
      </Content>
    </Wrapper>
  );
}