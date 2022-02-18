import React from 'react';

import SearchDecks from '@components/blocks/SearchDecks';
import AddDecks from '../AddDecks';

import { Wrapper, Content } from './styles';

export default function AddOrSearchDecks() {
  return (
    <Wrapper>
      <Content>
        <SearchDecks />
        <AddDecks />
      </Content>
    </Wrapper>
  );
}