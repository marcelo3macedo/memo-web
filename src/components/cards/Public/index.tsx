import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  Area,
  Title,
  Content,
  SecretContent,
} from './styles';

export default function Public({ card }) {
  return (
    <Wrapper>
      <Container className='no-select'>
        <Area>
          <Header>
            <Title>{card.title}</Title>
            <Content>{card.content}</Content>
            <SecretContent>{card.secretContent}</SecretContent>
          </Header>
        </Area>
      </Container>
    </Wrapper>
  );
}
