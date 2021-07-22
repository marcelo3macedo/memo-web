import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Footer, Block } from './styles';
import ButtonSecondary from '@components/button/ButtonSecondary';
import DecksGallery from '@components/blocks/DecksGallery';

export default function PendingDecks() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <DecksGallery />
        <Footer>
          <Block></Block>
          <Block><ButtonSecondary content={t('decks.seeMore')} /></Block>
        </Footer>
      </Content>
    </Wrapper>
  );
}