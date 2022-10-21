import React from 'react';
import IconMedium from '@components/icons/IconMedium';
import { getTimeFromNow } from '@helpers/DateHelper';
import Detail from '../Detail';

import { Wrapper, Content, Header, Title, Footer, Card, Action } from './styles';

export default function Item({ session }) {
  const { deck } = session || {}

  return (
    <Wrapper>
      <Content>
        <Card>
          <Header>
            <Title>{ deck.name }</Title>
          </Header>
          <Footer>
            <Detail icon={'time'} title={getTimeFromNow(session.createdAt)} />
          </Footer>
        </Card>
        <Action>
          <IconMedium name={"next"} />
        </Action>
      </Content>
    </Wrapper>
  );
}