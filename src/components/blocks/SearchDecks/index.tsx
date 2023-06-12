import SearchDeck from '@components/decks/Search';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title } from './styles';

export default function SearchDecks({ action }) {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.search')}</Title>
        <SearchDeck action={action} />
      </Content>
    </Wrapper>
  );
}
