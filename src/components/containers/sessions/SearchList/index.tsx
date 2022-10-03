import React from 'react';
import { useDispatch } from 'react-redux';

import Empty from '@components/decks/Empty';
import { navigatePush } from '@store/mods/navigate/actions';
import { PATH_ADDDECK } from '@services/Navigation';
import { SESSIONS_PRIVATE } from '@constants/Sessions';

import List from '@components/galleries/List';
import ModalEditDeck from '@components/modal/ModalEditDeck';

import { Content, Wrapper } from './styles';

export default function SessionList({ sessions }) {
    const dispatch = useDispatch()
    
    function createSessionClick() {
        dispatch(navigatePush({ path: PATH_ADDDECK }))
    }

    if (!sessions || sessions.length === 0) {
        return (<Empty action={createSessionClick}/>)
    }

    return (
      <Wrapper>
        <Content>
            <List sessions={sessions} type={SESSIONS_PRIVATE} />            
        </Content>
        <ModalEditDeck />
      </Wrapper>
    )
}