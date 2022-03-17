import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Message } from './styles';

export default function WelcomeMessage({ sessions, name }) {
  const t = useTranslation();
  const hasSessions = !sessions || sessions.length === 0;
  
  return (
    <Wrapper>
      <Content>
        {name ? (
          <Title>{t('welcome.title')} {name}!</Title>
        ): <></>}        
        <Message>{ hasSessions ? t('welcome.new') : t('welcome.message')}</Message>
      </Content>
    </Wrapper>
  );
}