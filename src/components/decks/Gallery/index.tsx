import React from 'react';

import Private from '../Private';
import Public from '../Public';

import { Wrapper, Content, DeckWrapper, DeckComponent } from './styles';

export default function Gallery({sessions=[], type}) {
  return (
    <Wrapper>
      <Content>
        {sessions.map(d=> (
          <DeckWrapper key={d.id}>
            <DeckComponent>
              {type === 'private' ? 
                (<Private deck={d} />) : 
                (<Public deck={d} />) }
            </DeckComponent>
          </DeckWrapper>
        ))}
      </Content>
    </Wrapper>
  );
}