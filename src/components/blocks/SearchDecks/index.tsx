import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';

import IconSmall from '@components/icons/IconSmall';
import { Wrapper, Content, Title, SubTitle, Search, SearchInput, SearchIcon } from './styles';
import { searchAction } from '@store/modules/search/actions';
import FeaturedGallery from '../FeaturedGallery';
import { RootState } from '@store/modules/rootReducer';

export default function SearchDecks({ title, subTitle }) {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [ term, setTerm ] = useState("");
  const featuredDecks = useSelector((state:RootState) => state.resume.featuredDecks);
  
  function searchClick() {
    dispatch(searchAction({ term }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>

        <Search>
          <SearchInput onChange={e=>setTerm(e.target.value)} placeholder={t("decks.searchPlaceholder")}/>
          <SearchIcon>
            <IconSmall name={"search"} action={searchClick} />
          </SearchIcon>
        </Search>

        <FeaturedGallery featuredDecks={featuredDecks} />
      </Content>
    </Wrapper>
  );
}