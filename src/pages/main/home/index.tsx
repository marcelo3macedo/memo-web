import AdBanner from '@components/ads/banner';
import { TitleApp } from '@components/app/title';
import { FeaturedDecks } from '@components/decks/featured';
import { ActionsMenu } from '@components/menu/actions';
import { DetailsSearch } from '@components/search/details';
import { loadAction } from '@store/modules/featuredUser/actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Content, Wrapper } from './styles';

export function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <TitleApp />
        <ActionsMenu />
        <AdBanner id="ca-pub-9829912735551664" slot="3331571158" />
        <DetailsSearch />
        <FeaturedDecks />
      </Content>
    </Wrapper>
  );
}
