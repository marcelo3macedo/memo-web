import React from 'react';
import Deck from '@components/blocks/Deck';

import { Wrapper, Content } from './styles';

export default function DecksGallery({decks=[]}) {
  return (
    <Wrapper>
      <Content>
        {decks.map(d=> (
          <Deck data={d} />
        ))}
      </Content>
    </Wrapper>
  );
}