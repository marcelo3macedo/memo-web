import React from 'react';
import { useDispatch } from 'react-redux';

import IconMedium from '@components/icons/IconMedium';
import IconNamed from '@modules/components/elements/IconNamed';
import IIndexActiveSessions from '@modules/sessions/dtos/IIndexActiveSessions';
import { getTimeFromNow } from '@helpers/DateHelper';
import { navigateTo } from '@store/mods/sessions/actions';

import { Wrapper, Content, Header, Title, Footer, Card, Action } from './styles';

export default function IndexActive({ session }:IIndexActiveSessions) {
  const dispatch = useDispatch()
  const { deck } = session || {}

  function sessionClick() {    
    dispatch(navigateTo({ sessionId: session.id }))
  }

  return (
    <Wrapper onClick={sessionClick}>
      <Content>
        <Card>
          <Header>
            <Title>{ deck.name }</Title>
          </Header>
          <Footer>
            <IconNamed icon={'time'} title={getTimeFromNow(session.createdAt)} />
          </Footer>
        </Card>
        <Action>
          <IconMedium name={"next"} />
        </Action>
      </Content>
    </Wrapper>
  );
}