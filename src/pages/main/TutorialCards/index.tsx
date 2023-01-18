import React from 'react';

import Review from '@modules/tutorial/elements/Review';

import { Wrapper, Content } from './styles';

export default function TutorialCards() {
  return (
    <Wrapper>
      <Content>
        <Review />
      </Content>
    </Wrapper>
  ); 
}