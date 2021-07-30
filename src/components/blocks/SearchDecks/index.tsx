import React, { useState } from 'react';
import { useDispatch } from "react-redux";

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Title, SubTitle, Search, SearchInput } from './styles';
import { searchAction } from '@store/modules/search/actions';

export default function SearchDecks({ title, subTitle }) {
  const dispatch = useDispatch();
  const [ term, setTerm ] = useState("");
  
  function searchClick() {
    dispatch(searchAction({ term }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>

        <Search>
          <SearchInput onChange={e=>setTerm(e.target.value)}/>
          <IconSmall name={"search"} action={searchClick} />
        </Search>
      </Content>
    </Wrapper>
  );
}