import React from 'react';
import { useSelector } from 'react-redux';

import PageLoading from '@components/loading/PageLoading';
import Header from '@modules/review/elements/Header';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content } from './styles';
import Card from '@modules/review/elements/Card';

export default function Review() {
  const { isLoading } = useSelector((state:RootState) => state.review)

  if (isLoading) {
    return <PageLoading />;
  }

  return ( 
    <Wrapper>
      <Content>
        <Header />
        <Card />
      </Content>
    </Wrapper>
  );
}