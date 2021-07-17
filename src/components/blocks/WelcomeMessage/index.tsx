import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Message } from './styles';

export default function WelcomeMessage() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('welcome.title')}</Title>
        <Message>{t('welcome.message')}</Message>
      </Content>
    </Wrapper>
  );
}