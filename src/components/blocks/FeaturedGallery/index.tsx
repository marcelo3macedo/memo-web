import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconLarge from '@components/icons/IconLarge';
import Public from '@components/decks/Public';

import { Wrapper, Content, Title, Header, DecksArea, DeckItem, Container } from './styles';

export default function FeaturedGallery({featuredDecks=[]}) {
  const t = useTranslation()
  if (featuredDecks.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Container>
        <Header>
          <IconLarge name="featured" />
          <Title>{t('blocks.featured')}</Title>
        </Header>
        <Content>
          <DecksArea>
            {featuredDecks.map(d=> (
              <DeckItem>
                <Public key={d.id} data={d.deck} />
              </DeckItem>
            ))}
          </DecksArea>
        </Content>
      </Container>
    </Wrapper>
  );
}