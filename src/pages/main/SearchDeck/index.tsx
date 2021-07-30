import React from 'react';
import { useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, Term } from './styles';
import DecksColumn from '@components/blocks/DecksColumn';

export default function SearchDeck() {
  const t = useTranslation();
  const { term, results } = useSelector((state:RootState) => state.search);

  return (
    <Wrapper>
      <Content>
        <Title>{t('searchDeck.title')}</Title>
        <Term>{term}</Term>
        <DecksColumn decks={results} />
      </Content>
    </Wrapper>
  ); 
}