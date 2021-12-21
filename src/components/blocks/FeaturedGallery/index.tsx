import React from 'react';
import Deck from '@components/blocks/Deck';

import { Wrapper, Content, Title, Header, DecksArea, Container } from './styles';
import IconMedium from '@components/icons/IconMedium';

export default function FeaturedGallery({featuredDecks=[]}) {
  return (
    <Wrapper>
      <Container>
        <Header>
          <IconMedium name="featured" />
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