import React from 'react';
import Card from '../Card';

import { Wrapper, Content } from './styles';

export default function CardsList({ cards=[] }) {
  return (
    <Wrapper>
      <Content>
        {cards ? cards.map(c => (
          <Card key={c.id} card={c} />
        )) : <></>}
      </Content>
    </Wrapper>
  );
}