import React from 'react';
import { useTranslation } from 'react-multi-lang';

import logo from "@assets/logo.png";

import { Wrapper, Content, Picture, Title, SubTitle } from './styles';

export default function MenuHeader() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
          <Picture src={logo} />
          <Title>{t('application.name')}</Title>
          <SubTitle>{t('application.title')}</SubTitle>
      </Content>
    </Wrapper>
  );
}