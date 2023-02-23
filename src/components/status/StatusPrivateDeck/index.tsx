import React from 'react';

import StatusDeckItem from '../StatusDeckItem';

import { Wrapper, Content } from './styles';

export default function StatusPrivateDeck({ visibility, frequency }:any) {
  return (
    <Wrapper>
      <Content>
        <StatusDeckItem icon="visibility" value={visibility} />
        <StatusDeckItem icon="time" value={frequency} />
      </Content>
    </Wrapper>
  );
}