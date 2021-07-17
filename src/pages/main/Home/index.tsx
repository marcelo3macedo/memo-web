import React from 'react';

import { Wrapper, Content } from './styles';
import PendingDecks from '@components/blocks/PendingDecks';
import WelcomeMessage from '@components/blocks/WelcomeMessage';

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <WelcomeMessage/>
        <PendingDecks />
      </Content>
    </Wrapper>
  ); 
}