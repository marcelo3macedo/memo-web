import React from 'react';

import { Wrapper, Content, DeckWrapper } from './styles';
import Deck from '../Deck';

export default function DecksColumn({decks=[]}) {
  return (
    <Wrapper>
      <Content>
        {decks.map(d=> (
          <DeckWrapper>
            <Deck key={d.id} data={d} />
          </DeckWrapper>
        ))}
      </Content>
    </Wrapper>
  );
}