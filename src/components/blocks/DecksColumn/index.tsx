import React from 'react';

import { Wrapper, Content, DeckWrapper } from './styles';
import Deck from '../Deck';

export default function DecksColumn({decks=[]}) {
  return (
    <Wrapper>
      <Content>
        {decks.map(d=> (
          <DeckWrapper key={d.id}>
            <Deck data={d} />
          </DeckWrapper>
        ))}
      </Content>
    </Wrapper>
  );
}