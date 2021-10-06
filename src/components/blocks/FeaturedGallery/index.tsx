import React from 'react';
import Deck from '@components/blocks/Deck';

import { Wrapper, Content, Title, Header, HeaderIcon, Container } from './styles';
import featured from '@assets/icons/featured.png';

export default function FeaturedGallery({featuredDecks=[]}) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <HeaderIcon src={featured} />
          <Title>Em Destaque</Title>
        </Header>
        <Content>
          {featuredDecks.map(d=> (
            <Deck key={d.deck.id} data={d.deck} />
          ))}
        </Content>
      </Container>
    </Wrapper>
  );
}