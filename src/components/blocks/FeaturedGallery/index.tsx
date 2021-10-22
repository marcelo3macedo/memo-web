import React from 'react';
import Deck from '@components/blocks/Deck';

import { Wrapper, Content, Title, Header, HeaderIcon, DecksArea, Container } from './styles';
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
          <DecksArea>
          {featuredDecks.map(d=> (
            <Deck key={d.id} data={d.deck} />
          ))}
          </DecksArea>
        </Content>
      </Container>
    </Wrapper>
  );
}