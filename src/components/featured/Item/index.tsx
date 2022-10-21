import React from 'react';
import IconMedium from '@components/icons/IconMedium';
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
            <Detail icon={'card'} title={deck.cardsCount} />
          </Footer>
        </Card>
        <Action>
          <IconMedium name={"next"} />
        </Action>
      </Content>
    </Wrapper>
  );
}