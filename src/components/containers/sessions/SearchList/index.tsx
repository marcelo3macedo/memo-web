import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

import Empty from '@components/decks/Empty';
import { navigatePush } from '@store/mods/navigate/actions';
import { PATH_ADDDECK } from '@services/Navigation';
import { SESSIONS_PRIVATE } from '@constants/Sessions';

import List from '@components/galleries/List';
import ModalEditDeck from '@components/modal/ModalEditDeck';
import MorePages from '@modules/pagination/elements/MorePages';
import { RootState } from '@store/modules/rootReducer';

import { Content, Wrapper } from './styles';
import { loadMoreListAction } from '@store/mods/sessions/actions';

export default function SessionList({ sessions }:any) {
    const dispatch = useDispatch()
    const location = useLocation()
    const { pages, actualPage } = useSelector((state:RootState) => state.sessions)
    const { search } = queryString.parse(location.search) || {}
    
    function createSessionClick() {
        dispatch(navigatePush({ path: PATH_ADDDECK }))
    }

    function loadMoreClick() {
      dispatch(loadMoreListAction(search))
    }

    if (!sessions || sessions.length === 0) {
        return (<Empty action={createSessionClick}/>)
    }

    return (
      <Wrapper>
        <Content>
            <List sessions={sessions} type={SESSIONS_PRIVATE} />
            <MorePages pages={pages} actualPage={actualPage} action={loadMoreClick} />
        </Content>
        <ModalEditDeck />
      </Wrapper>
    )
}