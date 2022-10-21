import React from 'react';

import IIndexPrivateCard from '@modules/cards/dtos/IIndexPrivateCard';

import { Wrapper, Content, Card, Header, Title, Footer, CardContent, SecretContent } from './styles';

export default function IndexPublic({ card }:IIndexPrivateCard) {
  if (!card) {
    return <></>
  }

  return (
    <Wrapper className='no-select'>
      <Content>
        <Card>
          <Header>
            <Title>{ card.title }</Title>
          </Header>
          <Footer>
            <CardContent>{ card.content }</CardContent>
            <SecretContent>{ card.secretContent }</SecretContent>
          </Footer>
        </Card>
      </Content>
    </Wrapper>
  );
}