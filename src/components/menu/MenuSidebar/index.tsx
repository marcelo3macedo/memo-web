import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import MenuSidebarOptions from '../MenuSidebarOptions';
import logo from "@assets/logo.png";
import logoPro from "@assets/logoPro.png";
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Image, Header, Title, Options } from './styles';

export default function MenuSidebar() {
  const t = useTranslation()
  const user = useSelector((state:RootState) => state.auth.user)
  const { isPro } = user || {}
  const logoUrl = isPro ? logoPro : logo
  
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