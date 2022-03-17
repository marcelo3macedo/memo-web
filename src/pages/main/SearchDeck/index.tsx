import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { RootState } from '@store/modules/rootReducer';

import HeaderPage from '@components/header/HeaderPage';
import Categories from '@components/blocks/Categories';

import { Wrapper, Content, SearchArea, SearchInput, Results, Header, Message } from './styles';
import IconMedium from '@components/icons/IconMedium';
import Featured from '@components/blocks/Featured';
import { loadAction } from '@store/modules/search/actions';
import DecksColumn from '@components/blocks/DecksColumn';
import { searchAction } from '@store/modules/search/actions';

export default function SearchDeck() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const [ term, setTerm ] = useState("");
  const { categories, decks, featured, searchQuery } = useSelector((state:RootState) => state.search);
  
  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  function doSearch() {
    dispatch(searchAction({ term }));
  }

  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('searchDeck.title')} subTitle={t('searchDeck.subTitle')}></HeaderPage>

        <SearchArea>
          <SearchInput onChange={e=>setTerm(e.target.value)} placeholder={t('searchDeck.placeholder')}></SearchInput>
          <IconMedium name="search" onClick={doSearch}/>
        </SearchArea>

        <Categories categories={categories} categoryAction=""></Categories>

        { searchQuery ? (
          <Results>
            <Header>{t('searchDeck.results')} {searchQuery}</Header>


            { (decks && decks.length > 0) ? (
              <DecksColumn decks={decks}></DecksColumn>
            ) : (
              <Message>{t('searchDeck.notFound')}</Message>
            )}          
          </Results>  
        ) : <></> }               

        <Featured data={featured}></Featured>
      </Content>
    </Wrapper>
  ); 
}