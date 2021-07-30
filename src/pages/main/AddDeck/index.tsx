import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title } from './styles';

export default function AddDeck() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Title>{t('newDeck.title')}</Title>
      </Content>
    </Wrapper>
  ); 
}