import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Search, SearchInput, SearchIcon } from './styles';

export default function SearchBox({ action }:any) {
  const t = useTranslation();
  const [ term, setTerm ] = useState("");

  function keyUpAction(e) {
    if (e.key === 'Enter') {
      action({ query: term })
    }
  }
  
  return (
    <Wrapper>
      <Content>
        <Search>
          <SearchInput placeholder={t("decks.searchPlaceholder")} onChange={e=>setTerm(e.target.value)} onKeyUp={keyUpAction}/>
          <SearchIcon onClick={() => {action(term)}}>
            <IconSmall name={"search"} />
          </SearchIcon>
        </Search>
      </Content>
    </Wrapper>
  );
}