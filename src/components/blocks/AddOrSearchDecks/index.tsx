import React from 'react';
import { useTranslation } from 'react-multi-lang';

import SearchDecks from '@components/blocks/SearchDecks';

import { Wrapper, Content } from './styles';
import AddDecks from '../AddDecks';

export default function AddOrSearchDecks() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <SearchDecks title="" subTitle={t('decks.search')}/>
        <AddDecks></AddDecks>
      </Content>
    </Wrapper>
  );
}