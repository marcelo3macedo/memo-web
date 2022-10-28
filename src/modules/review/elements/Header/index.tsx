import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, SubTitle, Title } from './styles';
import Position from '../Position';

export default function Header() {
  const t = useTranslation()
  const { session, position } = useSelector((state:RootState) => state.review)
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