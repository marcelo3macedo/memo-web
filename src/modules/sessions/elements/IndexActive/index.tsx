import React from 'react';

import IconMedium from '@components/icons/IconMedium';
import IconNamed from '@modules/components/elements/IconNamed';
import { getTimeFromNow } from '@helpers/DateHelper';

import { Wrapper, Content, Header, Title, Footer, Card, Action } from './styles';

export default function IndexActive({ session }) {
  const { deck } = session || {}

  function sessionClick() {    
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