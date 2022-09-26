import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import AddOrSearchDecks from '@components/blocks/AddOrSearchDecks';
import FeaturedGallery from '@components/blocks/FeaturedGallery';
import OpenSessions from '@components/blocks/OpenSessions';
import PageLoading from '@components/loading/PageLoading';
import { RootState } from '@store/modules/rootReducer';
import { loadAction } from '@store/modules/user/actions';
import Options from '@components/containers/home/Options';
import MessageWelcome from '@modules/blocks/elements/MessageWelcome';

import { Wrapper, Content } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const { isLoading, sessions, featuredDecks } = useSelector((state:RootState) => state.user);
  
  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <MessageWelcome />
        <Options />
        <OpenSessions sessions={sessions} />
        <AddOrSearchDecks />
        <FeaturedGallery featuredDecks={featuredDecks} />
      </Content>
    </Wrapper>
  ); 
}