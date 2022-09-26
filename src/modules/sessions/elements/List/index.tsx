import React from 'react';


import { SEE_MORE_TYPE_END } from '@constants/SeeMore';
import SeeMore from '@modules/components/elements/SeeMore';
import IListSessions from '@modules/sessions/dtos/IListSessions';
import IndexActive from '../IndexActive';

import { Wrapper, Content } from './styles';

export default function List({ sessions, type }:IListSessions) {
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