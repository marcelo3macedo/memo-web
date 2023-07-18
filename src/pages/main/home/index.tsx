import { TitleApp } from '@components/app/title';
import { FeaturedDecks } from '@components/decks/featured';
import { ActionsMenu } from '@components/menu/actions';
import { DetailsSearch } from '@components/search/details';

import { Content, Wrapper } from './styles';

export function Home() {
  return (
    <Wrapper>
      <Content>
        <TitleApp />
        <ActionsMenu />
        <DetailsSearch />
        <FeaturedDecks />
      </Content>
    </Wrapper>
  );
}
