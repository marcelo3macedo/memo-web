import React from 'react';

import SeeMore from '@modules/components/elements/SeeMore';

import { Wrapper, Content } from './styles';
import { SEE_MORE_TYPE_END } from '@constants/SeeMore';
import IndexDated from '../IndexDated';

export default function List({ sessions, type }) {
  function getSessionByType(session, type) {
    return <IndexDated session={session} />;
  }

  return (
    <Wrapper>
      <Content>
        { sessions.map(s => getSessionByType(s, type))}
        <SeeMore elements={sessions} type={SEE_MORE_TYPE_END}  />
      </Content>
    </Wrapper>
  );
}