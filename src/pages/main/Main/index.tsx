import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import WelcomeMessage from '@components/containers/home/WelcomeMessage';
import AddOrSearchDecks from '@components/blocks/AddOrSearchDecks';
import FeaturedGallery from '@components/blocks/FeaturedGallery';
import OpenSessions from '@components/blocks/OpenSessions';
import PageLoading from '@components/loading/PageLoading';
import { RootState } from '@store/modules/rootReducer';
import { loadAction } from '@store/modules/user/actions';
import background from "@assets/pages/home/background.png";

import { Wrapper, Content, Background } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const { isLoading, sessions, featuredDecks } = useSelector((state:RootState) => state.user);
  const { name } = useSelector((state:RootState) => state.auth);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <Background src={background} />
        <WelcomeMessage name={name} />
        <OpenSessions sessions={sessions} />
        <AddOrSearchDecks />
        <FeaturedGallery featuredDecks={featuredDecks} />
      </Content>
    </Wrapper>
  ); 
}