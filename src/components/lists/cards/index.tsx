import { TitleText } from '@components/elements/texts/title';
import { RootState } from '@store/modules/rootReducer';
import { Key } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { BaseList } from '../base';
import { CardItem } from '../card';

import { Content, Items } from './styles';

export function CardList({ editCard, removeCard }: any) {
  const { t } = useTranslation();
  const { cards } = useSelector((state: RootState) => state.card);

  function generateItem(c: any, i: Key) {
    return (
      <CardItem
        key={i}
        card={c}
        editAction={editCard}
        removeCard={removeCard}
      />
    );
  }

  if (!cards || cards.length === 0) {
    return <></>;
  }

  const items = cards.map((c: any, i: Key) => generateItem(c, i));
  return (
    <Content>
      <TitleText value={t('deck.cardList')} />
      <Items>
        <BaseList children={items} />
      </Items>
    </Content>
  );
}
