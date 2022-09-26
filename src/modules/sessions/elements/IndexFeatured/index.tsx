import React from 'react';

import IconMedium from '@components/icons/IconMedium';
import IconNamed from '@modules/components/elements/IconNamed';
import IIndexActiveSessions from '@modules/sessions/dtos/IIndexActiveSessions';

import { Wrapper, Content, Header, Title, Footer, Card, Action } from './styles';

export default function IndexFeatured({ session }:IIndexActiveSessions) {
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
            <IconNamed icon={'card'} title={deck.cardsCount} />
          </Footer>
        </Card>
        <Action>
          <IconMedium name={"next"} />
        </Action>
      </Content>
    </Wrapper>
  );
}