import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import Position from '../Position';

import { Wrapper, Content, SubTitle, Title } from './styles';

export default function Header() {
  const t = useTranslation();
  const { session, position } = useSelector((state: RootState) => state.review);
  const actual = position + 1;

  return (
    <Wrapper>
      <Content>
        <SubTitle>{t('review.subTitle')}</SubTitle>
        <Title>{session.deck.name}</Title>
        <Position actual={actual} total={session.cards.length} />
      </Content>
    </Wrapper>
  );
}
