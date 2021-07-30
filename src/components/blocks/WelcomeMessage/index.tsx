import React from 'react';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { RootState } from '@store/modules/rootReducer';
import { Wrapper, Content, Title, Message } from './styles';

export default function WelcomeMessage() {
  const t = useTranslation()
  const userName = useSelector((state:RootState) => state.auth.name);
  const decks = useSelector((state:RootState) => state.personal.decks);

  return (
    <Wrapper>
      <Content>
        <Title>{t('welcome.title')} {userName}!</Title>
        <Message>{ decks.length === 0 ? t('welcome.new') : t('welcome.message')}</Message>
      </Content>
    </Wrapper>
  );
}