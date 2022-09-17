import React from 'react';
import { useTranslation } from 'react-multi-lang';

import logo from "@assets/logo.png";

import { Wrapper, Content, Title, Picture, Message } from './styles';

export default function WelcomeMessage({ name }) {
  const t = useTranslation();
  
  return (
    <Wrapper>
      <Content>
        <Picture src={logo}/>
        {name ? (
          <Title>{t('welcome.title')} {name}!</Title>
        ): <></>}        
        <Message>{t('welcome.message')}</Message>
      </Content>
    </Wrapper>
  );
}