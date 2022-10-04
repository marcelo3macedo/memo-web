import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IndexActive from '../IndexActive';
import IndexFeatured from '../IndexFeatured';
import IndexGallery from '../IndexGallery';
import { SESSIONS_LIST_GALLERY, SESSIONS_LIST_TIMEPASSED } from '@constants/SessionLists';
import IListSessions from '@modules/sessions/dtos/IListSessions';
import MorePages from '@modules/pagination/elements/MorePages';
import { RootState } from '@store/modules/rootReducer';
import { loadMoreAction } from '@store/modules/gallery/actions';

import { Wrapper, Content } from './styles';

export default function List({ sessions, type }:IListSessions) {
  const dispatch = useDispatch()
  const { pages, actualPage } = useSelector((state:RootState) => state.gallery)
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

  function loadMoreClick() {
    dispatch(loadMoreAction())
  }

  return (
    <Wrapper>
      <Content>
        { sessions.map(s => getSessionByType(s, type))}
        <MorePages pages={pages} actualPage={actualPage} action={loadMoreClick} />
      </Content>
    </Wrapper>
  );
}