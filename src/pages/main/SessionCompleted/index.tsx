import Footer from '@modules/reviewCompleted/elements/Footer';
import Header from '@modules/reviewCompleted/elements/Header';
import Options from '@modules/reviewCompleted/elements/Options';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';

import { Wrapper, Content } from './styles';

export default function SessionCompleted() {
  const { options, answered, session } = useSelector(
    (state: RootState) => state.review
  );

  return (
    <Wrapper>
      <Content>
        <Header session={session} />
        <Options options={options} answered={answered} />
        <Footer />
      </Content>
    </Wrapper>
  );
}
