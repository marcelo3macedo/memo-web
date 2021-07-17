import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Footer, Block } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';

export default function PendingDecks() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.title')}</Title>
        <Footer>
          <Block></Block>
          <Block><ButtonSecondary content={ "Ver Mais" } /></Block>
        </Footer>
      </Content>
    </Wrapper>
  );
}