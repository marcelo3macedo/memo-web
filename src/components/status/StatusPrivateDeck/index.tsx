import React from 'react';

import IconSmall from '@components/icons/IconSmall';

import { Wrapper, Content, Status, Title } from './styles';

export default function StatusPrivateDeck({ visibility, frequency }) {
  return (
    <Wrapper>
      <Content>
        <Status>
          <IconSmall name="visibility" />
          <Title>{visibility}</Title>
        </Status>
        <Status>
          <IconSmall name="time" />
          <Title>{frequency}</Title>
        </Status>
      </Content>
    </Wrapper>
  );
}