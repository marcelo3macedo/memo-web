import { SmallLoading } from '@components/elements/loading/small';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/texts/TextProps';
import { useTranslation } from 'react-i18next';

import { ListDecks } from '../list';

import { Container, Items } from './styles';

export function FeaturedDecks() {
  const { t } = useTranslation();
  const { loading } = {} as any;
  const featuredDecks = [
    {
      id: '1',
      deck: {
        id: '1',
        name: 'teste',
        institution: { name: 'teste' },
        category: { name: 'teste' },
        cardsCount: 10
      }
    },
    {
      id: '1',
      deck: {
        id: '1',
        name: 'teste',
        institution: { name: 'teste' },
        category: { name: 'teste' },
        cardsCount: 10
      }
    },
    {
      id: '1',
      deck: {
        id: '1',
        name: 'teste',
        institution: { name: 'teste' },
        category: { name: 'teste' },
        cardsCount: 10
      }
    },
    {
      id: '1',
      deck: {
        id: '1',
        name: 'teste',
        institution: { name: 'teste' },
        category: { name: 'teste' },
        cardsCount: 10
      }
    }
  ];
  /* useSelector(
    (state: RootState) => state.featuredUser
  );*/

  if (loading) {
    <SmallLoading />;
  }

  if (!featuredDecks) {
    return <></>;
  }

  return (
    <Container>
      <TitleText value={t('deck.featured')} styled={Styles.Default} />
      <Items>
        <ListDecks decks={featuredDecks} />
      </Items>
    </Container>
  );
}
