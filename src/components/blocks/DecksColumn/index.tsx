import React from 'react';

import { Wrapper, Content, DeckWrapper, DeckComponent } from './styles';
import Deck from '../Deck';

export default function DecksColumn({decks=[]}) {
  return (
    <Wrapper>
      <Content>
        {decks.map(d=> (
          <DeckWrapper key={d.id}>
            <DeckComponent>
              <Deck data={d} />
            </DeckComponent>
          </DeckWrapper>
        ))}
      </Content>
    </Wrapper>
  );
}