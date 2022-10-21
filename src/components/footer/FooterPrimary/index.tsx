import React from 'react';
import { useTranslation } from 'react-multi-lang';

import logoWhite from "@assets/logoWhite.png";

import { Wrapper, Content, Copyright, CopyrightMessage, Info, Picture, Title, Options, Option } from './styles';

export default function FooterPrimary() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Info>
          <Picture src={logoWhite} alt={t('application.name')}/>
          <Title>{t('application.name')}</Title>
        </Info>
        <Options>
          <Option>{t('menu.policy')}</Option>
          <Option>{t('menu.help')}</Option>
          <Option>{t('menu.about')}</Option>
        </Options>
        <Copyright>
          <CopyrightMessage>{t('home.blockFooter.footer')}</CopyrightMessage>  
        </Copyright>
      </Content>
    </Wrapper>
  );
}