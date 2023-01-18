import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import MenuSidebarOptions from '../MenuSidebarOptions';
import logo from "@assets/logos/logo.png";
import logoPro from "@assets/logos/logo-pro.png";
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Image, Header, Title, Options } from './styles';

export default function MenuSidebar() {
  const t = useTranslation()
  const { userRole } = useSelector((state:RootState) => state.users)
  const logoUrl = userRole ? logoPro : logo
  
  return (
    <Wrapper>
      <Content>
        <Header>
          <Image src={logoUrl} />
          <Title className='title'>{t('application.name')}</Title>
        </Header>
        <Options>
          <MenuSidebarOptions />
        </Options>
      </Content>
    </Wrapper>
  );
}