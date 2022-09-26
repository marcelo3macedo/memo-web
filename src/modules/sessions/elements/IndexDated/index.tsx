import React from 'react';

import IconMedium from '@components/icons/IconMedium';
import IconNamed from '@modules/components/elements/IconNamed';
import { getTimeFromNow } from '@helpers/DateHelper';

import { Wrapper, Content, Header, Title, Footer, Card, Action } from './styles';

export default function IndexDated({ session }) {
  const { deck } = session || {}

  return (
    <Wrapper>
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