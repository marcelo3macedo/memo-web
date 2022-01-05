import React from 'react';

import { Wrapper, Content, DeckWrapper, DeckComponent } from './styles';
import DeckPublic from '../DeckPublic';

export default function DecksAvailable({decks=[]}) {
  return (
    <Wrapper>
      <Content>
        {decks.map(d=> (
          <DeckWrapper key={d.id}>
            <DeckComponent>
              <DeckPublic data={d} />
            </DeckComponent>
          </DeckWrapper>
        ))}
      </Content>
    </Wrapper>
  );
}