import React from 'react';
import Moment from 'moment';
import 'moment/locale/pt-br';

import { useDispatch } from "react-redux";

import IconSmall from '@components/icons/IconSmall';
import PageLoading from '@components/loading/PageLoading';
import { PATH_SESSION } from '@services/Navigation';
import { navigatePush } from '@store/modules/navigate/actions';

import { Wrapper, Content, Deck,  Title, Header, Details, Status, StatusTitle } from './styles';


export default function Single({ session }) {
  const dispatch = useDispatch();
  const { deck } = session || {};
  
  function openSessionClick() {
    dispatch(navigatePush({ path: `${PATH_SESSION}/${session.id}` }));
  }

  Moment.locale('pt-br');

  if (!session) {
    return <PageLoading />;
  }

  return (
    <Wrapper onClick={openSessionClick} className='no-select'>
      <Content>
        <Deck>
          <Header>
            <Title>{deck.name}</Title>
          </Header>
          <Details>
            <Status>
              <IconSmall name="card" />
              <StatusTitle>{session.sessionCards}</StatusTitle>
            </Status>
            <Status>
              <IconSmall name="time" />
              <StatusTitle>{Moment(session.createdAt).fromNow()}</StatusTitle>
            </Status>
          </Details>
        </Deck>
      </Content>
    </Wrapper>
  );
}