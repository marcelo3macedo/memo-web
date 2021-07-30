import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title } from './styles';

export default function SearchDeck() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Title>{t('searchDeck.title')}</Title>
      </Content>
    </Wrapper>
  ); 
}