import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { Wrapper, Content } from './styles';
import PendingDecks from '@components/blocks/PendingDecks';
import WelcomeMessage from '@components/blocks/WelcomeMessage';
import AddOrSearchDecks from '@components/blocks/AddOrSearchDecks';
import FeaturedGallery from '@components/blocks/FeaturedGallery';
import { loadAction } from '@store/modules/resume/actions';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAction());    
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <WelcomeMessage/>
        <PendingDecks />
        <AddOrSearchDecks />
        <FeaturedGallery />
      </Content>
    </Wrapper>
  ); 
}