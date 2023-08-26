import { Key } from 'react';

import { ItemFeatured } from '../itemFeatured';

import { Container } from './styles';

export function ListDecks({ decks }: any) {
  function generateItem(featured: any, key: Key) {
    const { deck } = featured || {};
    const { id, name, institution, category, cardsCount } = deck;
    return (
      <ItemFeatured
        id={id}
        name={name}
        key={key}
        institution={institution?.name}
        category={category?.name}
        cards={cardsCount}
      />
    );
  }

  const items = decks.map((c: any, i: Key) => generateItem(c, i));
  return <Container>{items}</Container>;
}
