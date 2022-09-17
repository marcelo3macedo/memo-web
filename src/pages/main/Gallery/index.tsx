import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import Categories from '@components/blocks/Categories';
import Gallery from '@components/decks/Gallery';
import Pagination from '@components/blocks/Pagination';
import HeaderPage from '@components/header/HeaderPage';
import PageLoading from '@components/loading/PageLoading';
import SearchResults from '@components/search/SearchResults';
import { loadAction, loadMoreAction, queryAction } from '@store/modules/gallery/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content } from './styles';
import SearchDeck from '@components/decks/Search';

export default function GalleryPage() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { decks, categories, hasMore, isLoading, query } = useSelector((state:RootState) => state.gallery);
  const { search } = useParams() as any;

  useEffect(() => {
    if (search) {
      dispatch(queryAction({ query: search }));
      return;
    }

    dispatch(loadAction());  
  }, [dispatch, search]);

  function loadMore() {
    dispatch(loadMoreAction());
  }

  function searchAction(query) {
    dispatch(queryAction({ query }));
  }

  function categoryAction(query) {
    dispatch(queryAction({ query }));
  }

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <HeaderPage title={t('gallery.title')} subTitle={t('gallery.subTitle')} />
        <SearchDeck action={searchAction} />
        <Categories categories={categories} categoryAction={categoryAction} />
        <SearchResults query={query} />
        <Gallery sessions={decks} type="public" />
        <Pagination callback={loadMore} visible={hasMore}/>
     </Content>
    </Wrapper>
  ); 
}