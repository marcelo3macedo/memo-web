import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Title, Search, SearchInput, SearchIcon } from './styles';
import { searchAction } from '@store/modules/search/actions';

export default function SearchDecks() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [ term, setTerm ] = useState("");
  
  function searchClick() {
    dispatch(searchAction({ term }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('decks.search')}</Title>
        
        <Search>
          <SearchInput onChange={e=>setTerm(e.target.value)} placeholder={t("decks.searchPlaceholder")}/>
          <SearchIcon onClick={() => {searchClick() }}>
            <IconSmall name={"search"} />
          </SearchIcon>
        </Search>
      </Content>
    </Wrapper>
  );
}