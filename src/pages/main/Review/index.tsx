import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageLoading from '@components/loading/PageLoading';
import Header from '@modules/review/elements/Header';
import Card from '@modules/review/elements/Card';
import { loadOptionsAction } from '@store/mods/review/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content } from './styles';

export default function Review() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state:RootState) => state.review)

  useEffect(() => {
    dispatch(loadOptionsAction());
  }, [ dispatch ])

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