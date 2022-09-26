import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import PageLoading from '@components/loading/PageLoading';
import { RootState } from '@store/modules/rootReducer';
import { loadAction } from '@store/modules/user/actions';
import MessageWelcome from '@modules/blocks/elements/MessageWelcome';
import ActionsWelcome from '@modules/blocks/elements/ActionsWelcome';
import ActiveSessionWelcome from '@modules/blocks/elements/ActiveSessionWelcome';
import SearchWelcome from '@modules/blocks/elements/SearchWelcome';
import FeaturedGallery from '@modules/blocks/elements/FeaturedGallery';

import { Wrapper, Content } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state:RootState) => state.user);
  
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
        <ActionsWelcome />
        <ActiveSessionWelcome />
        <SearchWelcome />
        <FeaturedGallery />
      </Content>
    </Wrapper>
  ); 
}