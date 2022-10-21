import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { CARDS_PRIVATE } from '@constants/Cards';
import SubTitle from '@components/elements/SubTitle';
import List from '@modules/cards/elements/List';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Container } from './styles';

export default function EditCards() {
  const t = useTranslation()
  const { list } = useSelector((state:RootState) => state.cards)

  return (
    <Wrapper>
      <Container>
        <SubTitle title={t('editCard.title')} />
        <List cards={list} type={CARDS_PRIVATE} />
      </Container>
    </Wrapper>
  );
}