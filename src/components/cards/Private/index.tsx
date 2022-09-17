import React from 'react';

import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Container, Header, Area, Title, Content, SecretContent, RemoveArea } from './styles';

export default function Private({ card, actions }) {
  function actionOpenClick(screen) {
    if (!actions.open) {
      return;
    }

    actions.open({ screen, card });
  }

  return (
    <Wrapper>
      <Container className='no-select'>
        <RemoveArea className='remove-area' onClick={() => { actionOpenClick('remove-card') }}>
          <IconSmall name="delete" />
        </RemoveArea>
        <Area onClick={() => { actionOpenClick('edit-card') }}>
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