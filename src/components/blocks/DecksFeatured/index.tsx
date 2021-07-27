import React from 'react';
import { useTranslation } from 'react-multi-lang';
import DecksFilter from '@components/blocks/DecksFilter';
import DecksGallery from '@components/blocks/DecksGallery';

import { Wrapper, Content, Title } from './styles';

export default function DecksFeatured() {
  const t = useTranslation()

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.featured')}</Title>
        <DecksFilter />
        <DecksGallery />
      </Content>
    </Wrapper>
  );
}