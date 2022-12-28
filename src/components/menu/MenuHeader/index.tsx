import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import logo from "@assets/logo.png";
import logoPro from "@assets/logoPro.png";
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Picture, Title, SubTitle } from './styles';

export default function MenuHeader() {
  const t = useTranslation()
  const { userRole:isPro } = useSelector((state:RootState) => state.users);
  const logoUrl = isPro ? logoPro : logo

  return (
    <Wrapper>
      <Content>
          <Picture src={logoUrl} />
          <Title>{t('application.name')}</Title>
          <SubTitle>{t('application.title')}</SubTitle>
      </Content>
    </Wrapper>
  );
}