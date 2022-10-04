import React from 'react';

import { SESSIONS_LIST_GALLERY, SESSIONS_LIST_TIMEPASSED } from '@constants/SessionLists';
import { SEE_MORE_TYPE_END } from '@constants/SeeMore';
import SeeMore from '@modules/components/elements/SeeMore';
import IListSessions from '@modules/sessions/dtos/IListSessions';
import IndexActive from '../IndexActive';
import IndexFeatured from '../IndexFeatured';
import IndexGallery from '../IndexGallery';

import { Wrapper, Content } from './styles';

export default function List({ sessions, type }:IListSessions) {
  if (!sessions || sessions.length === 0) {
    return <></>;
  }

  
  function getSessionByType(session, type) {
    switch (type) {
      case SESSIONS_LIST_TIMEPASSED: return (<IndexActive key={session.id} session={session} />);
      case SESSIONS_LIST_GALLERY: return (<IndexGallery key={session.id} session={session} />); 
      default: return (<IndexFeatured key={session.id} session={session} />);
    }
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