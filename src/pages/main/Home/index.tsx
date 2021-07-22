import React from 'react';

import { Wrapper, Content } from './styles';
import PendingDecks from '@components/blocks/PendingDecks';
import SessionReview from '@components/blocks/SessionReview';
import WelcomeMessage from '@components/blocks/WelcomeMessage';
import AddOrSearchDecks from '@components/blocks/AddOrSearchDecks';

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <WelcomeMessage/>
        <PendingDecks />
        <AddOrSearchDecks />
        <SessionReview />
      </Content>
    </Wrapper>
  ); 
}