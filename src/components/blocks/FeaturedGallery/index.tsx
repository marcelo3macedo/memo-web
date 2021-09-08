import React from 'react';
import Deck from '@components/blocks/Deck';

import { Wrapper, Content, Title } from './styles';

export default function FeaturedGallery({featuredDecks=[]}) {
  return (
    <Wrapper>
      <Title>Em Destaque</Title>
      <Content>
        {featuredDecks.map(d=> (
          <Deck key={d.deck.id} data={d.deck} />
        ))}
      </Content>
    </Wrapper>
  );
}