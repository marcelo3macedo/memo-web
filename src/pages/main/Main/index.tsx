import PageLoading from '@components/loading/PageLoading';
import ActionsWelcome from '@modules/blocks/elements/ActionsWelcome';
import ActiveSessionWelcome from '@modules/blocks/elements/ActiveSessionWelcome';
import BannerInfoArea from '@modules/blocks/elements/BannerInfoArea';
import FeaturedGallery from '@modules/blocks/elements/FeaturedGallery';
import MessageWelcome from '@modules/blocks/elements/MessageWelcome';
import SearchWelcome from '@modules/blocks/elements/SearchWelcome';
import { loadAction } from '@store/mods/users/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Content } from './styles';

export default function Main() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.users);

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
        <ActiveSessionWelcome />
        <SearchWelcome />
        <ActionsWelcome />
        <FeaturedGallery />
        <BannerInfoArea />
      </Content>
    </Wrapper>
  );
}
