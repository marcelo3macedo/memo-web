import React from 'react';
import { useTranslation } from 'react-multi-lang';

import SubTitle from '@components/elements/SubTitle';
import List from '@modules/cards/elements/List';
import { CARDS_PRIVATE } from '@constants/Cards';

import { Wrapper, Container } from './styles';

export default function EditCards({ cards }) {
  const t = useTranslation()

  return (
    <Wrapper>
      <Container>
        <SubTitle title={t('editCard.title')} />
        <List cards={cards} type={CARDS_PRIVATE} />
      </Container>
    </Wrapper>
  );
}