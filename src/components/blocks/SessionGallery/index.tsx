import React from 'react';
import Session from '@components/blocks/Session';

import { Wrapper, Content } from './styles';

export default function SessionGallery({sessions=[]}) {
  return (
    <Wrapper>
      <Content>
        {sessions.map(s=> (
          <Session key={s.id} data={s} />
        ))}
      </Content>
    </Wrapper>
  );
}