import React from 'react';
import Single from '../Single';

import { Wrapper, Content } from './styles';

export default function Carousel({sessions=[]}) {
  return (
    <Wrapper>
      <Content>
        {sessions.map(s=> (
          <Single key={s.id} session={s} />
        ))}
      </Content>
    </Wrapper>
  );
}