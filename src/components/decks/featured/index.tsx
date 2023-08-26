import { SmallLoading } from '@components/elements/loading/small';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { ListDecks } from '../list';

import { Container, Items } from './styles';

export function FeaturedDecks() {
  const { t } = useTranslation();
  const { loading } = {} as any;
  const { featuredDecks } = useSelector(
    (state: RootState) => state.featuredUser
  );

  if (loading) {
    <SmallLoading />;
  }

  if (!featuredDecks) {
    return <></>;
  }

  return (
    <Container>
      <TitleText value={t('deck.featured')} styled={Styles.Pallete03} />
      <Items>
        <ListDecks decks={featuredDecks} />
      </Items>
    </Container>
  );
}
