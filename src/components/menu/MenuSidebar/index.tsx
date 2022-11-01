import React from 'react';
import { useTranslation } from 'react-multi-lang';

import MenuSidebarOptions from '../MenuSidebarOptions';
import logo from "@assets/logo.png";

import { Wrapper, Content, Image, Header, Title, Options } from './styles';

export default function MenuSidebar() {
  const t = useTranslation()
  
  return (
    <Wrapper>
      <Content>
        <Header>
          <Image src={logo} />
          <Title className='title'>{t('application.name')}</Title>
        </Header>
        <Options>
          <MenuSidebarOptions />
        </Options>
      </Content>
    </Wrapper>
  );
}