import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Search, SearchInput, SearchIcon } from './styles';

export default function SearchDeck({ action }) {
  const t = useTranslation();
  const [ term, setTerm ] = useState("");
  
  return (
    <Wrapper>
      <Content>
        <Search>
          <SearchInput placeholder={t("decks.searchPlaceholder")} onChange={e=>setTerm(e.target.value)}/>
          <SearchIcon onClick={() => {action(term)}}>
            <IconSmall name={"search"} />
          </SearchIcon>
        </Search>
      </Content>
    </Wrapper>
  );
}