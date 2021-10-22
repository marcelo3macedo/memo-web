import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Wrapper, Content } from './styles';
import PendingDecks from '@components/blocks/PendingDecks';
import WelcomeMessage from '@components/blocks/WelcomeMessage';
import AddOrSearchDecks from '@components/blocks/AddOrSearchDecks';
import FeaturedGallery from '@components/blocks/FeaturedGallery';
import { loadAction } from '@store/modules/resume/actions';
import { RootState } from '@store/modules/rootReducer';

export default function Main() {
  const dispatch = useDispatch();
  const { featuredDecks } = useSelector((state:RootState) => state.resume);

  useEffect(() => {
    dispatch(loadAction());    
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <WelcomeMessage/>
        <PendingDecks />
        <AddOrSearchDecks />
        <FeaturedGallery featuredDecks={featuredDecks} />
      </Content>
    </Wrapper>
  ); 
}