import React from 'react';

import ModalRemoveDeck from '@components/modal/ModalRemoveDeck';
import Private from '../Private';
import Public from '../Public';

import { Wrapper, Content, DeckWrapper, DeckComponent } from './styles';

export default function Gallery({decks=[], type}) {
  return (
    <Wrapper>
      <Content>
        {decks.map(d=> (
          <DeckWrapper key={d.id}>
            <DeckComponent>
              {type === 'private' ? 
                (<Private data={d} />) : 
                (<Public data={d} />) }
            </DeckComponent>
          </DeckWrapper>
        ))}

        {type === 'private' ? (<ModalRemoveDeck />) : <></>}
      </Content>
    </Wrapper>
  );
}