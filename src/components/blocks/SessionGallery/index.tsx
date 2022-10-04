import React from 'react';
import Session from '@components/blocks/Session';

import { Wrapper, Content } from './styles';

export default function SessionGallery({sessions=[]}) {
  if (!sessions || sessions.length === 0) {
    return <></>;
  }

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