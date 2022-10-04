import React from 'react';

import { Wrapper, Content, Title, Card, Header, Footer, Action, SubTitle} from './styles';

export default function IndexTelegram({ item }) {
  return (
    <Wrapper>
      <Content>
        <Card>
          <Header>
            <SubTitle>{ item.externalId }</SubTitle>
          </Header>
          <Footer>
            <Title>{ item.externalName }</Title>
          </Footer>
        </Card>
        <Action>
        </Action>
      </Content>
    </Wrapper>
  );
}