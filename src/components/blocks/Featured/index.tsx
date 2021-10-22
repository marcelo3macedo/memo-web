import React from 'react';
import { useTranslation } from 'react-multi-lang';
import Deck from '../Deck';

import { Wrapper, Content, Header, DecksArea, DeckWrapper, DeckComponent } from './styles';

export default function Featured({ data }) {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Header>{t('decks.featured')}</Header>

        <DecksArea>
          {data.map(d=> (
            <DeckWrapper key={d.id}>
              <DeckComponent>
                <Deck data={d.deck} />
              </DeckComponent>
            </DeckWrapper>
          ))}
          </DecksArea>
      </Content>
    </Wrapper>
  );
}