import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import IconMedium from '@components/icons/IconMedium';

import { Wrapper, Content, SearchInput } from './styles';

export default function SearchSecondary({ searchAction }) {
  const t = useTranslation();
  const [ term, setTerm ] = useState("");
  
  return (
    <Wrapper>
      <Content>
        <SearchInput onChange={e=>setTerm(e.target.value)} placeholder={t('searchDeck.placeholder')}></SearchInput>
        <IconMedium name="search" onClick={() => { searchAction(term) }} />
      </Content>
    </Wrapper>
  );
}