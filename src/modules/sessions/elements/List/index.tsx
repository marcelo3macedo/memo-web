import React from 'react';

import SeeMore from '@modules/components/elements/SeeMore';

import { Wrapper, Content } from './styles';
import { SEE_MORE_TYPE_END } from '@constants/SeeMore';
import IndexActive from '../IndexActive';

export default function List({ sessions, type }) {
  function getSessionByType(session, type) {
    return <IndexActive key={session.id} session={session} />;
  }

  function seeMoreAction() {
  }

  return (
    <Wrapper>
      <Content>
        { sessions.map(s => getSessionByType(s, type))}
        <SeeMore elements={sessions} type={SEE_MORE_TYPE_END} callback={seeMoreAction}  />
      </Content>
    </Wrapper>
  );
}