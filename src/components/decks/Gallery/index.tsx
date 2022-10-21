import React from 'react';

import Private from '../Private';
import Public from '../Public';
import { SESSIONS_PRIVATE } from '@constants/Sessions';

import { Wrapper, Content, DeckWrapper, DeckComponent } from './styles';

export default function Gallery({sessions=[], type}) {
  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  
  return (
    <Wrapper>
      <Content>
        {sessions.map(d=> (
          <DeckWrapper key={d.id}>
            <DeckComponent>
              {type === SESSIONS_PRIVATE ? 
                (<Private deck={d} />) : 
                (<Public deck={d} />) }
            </DeckComponent>
          </DeckWrapper>
        ))}
      </Content>
    </Wrapper>
  );
}