import SubTitle from '@components/elements/SubTitle';
import { CARDS_PUBLIC } from '@constants/Cards';
import List from '@modules/cards/elements/List';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { Wrapper, Container } from './styles';

export default function ViewCards() {
  const t = useTranslation();
  const { list } = useSelector((state: RootState) => state.cards);

  return (
    <Wrapper>
      <Container>
        <SubTitle title={t('editCard.title')} />
        <List cards={list} type={CARDS_PUBLIC} />
      </Container>
    </Wrapper>
  );
}
