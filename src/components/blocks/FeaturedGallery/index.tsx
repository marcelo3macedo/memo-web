import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import IconLarge from '@components/icons/IconLarge';
import Public from '@components/decks/Public';
import { openAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Title, Header, DecksArea, DeckItem, Container } from './styles';

export default function FeaturedGallery({featuredDecks=[]}) {
  const t = useTranslation()
  const dispatch = useDispatch()
  
  if (featuredDecks.length === 0) {
    return <></>;
  }

  function openDeck(deck) {
    dispatch(openAction({ deck }))
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
              <DeckItem key={d.id}>
                <Public data={d.deck} action={openDeck}/>
              </DeckItem>
            ))}
          </DecksArea>
        </Content>
      </Container>
    </Wrapper>
  );
}