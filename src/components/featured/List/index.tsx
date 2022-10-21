import React from 'react';
import Item from '../Item';

import { Wrapper, Content } from './styles';

export default function List({ sessions }) {
  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  
  return (
    <Wrapper>
      <Content>
        { sessions.map(s => <Item key={s.id} session={s} />)}
      </Content>
    </Wrapper>
  );
}