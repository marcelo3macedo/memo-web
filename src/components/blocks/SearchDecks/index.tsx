import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Title, Search, SearchInput, SearchIcon } from './styles';

export default function SearchDecks({ action }) {
  const t = useTranslation();
  const [ term, setTerm ] = useState("");
  
  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.search')}</Title>
        
        <Search>
          <SearchInput onChange={e=>setTerm(e.target.value)} placeholder={t("decks.searchPlaceholder")}/>
          <SearchIcon onClick={() => { action({ query:term }) }}>
            <IconSmall name={"search"} />
          </SearchIcon>
        </Search>
      </Content>
    </Wrapper>
  );
}