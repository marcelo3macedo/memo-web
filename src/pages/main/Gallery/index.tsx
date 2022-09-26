import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';
import { useParams } from 'react-router-dom';

import Categories from '@components/blocks/Categories';
import Gallery from '@components/decks/Gallery';
import Pagination from '@components/blocks/Pagination';
import PageLoading from '@components/loading/PageLoading';
import SearchResults from '@components/search/SearchResults';
import { loadAction, loadMoreAction, queryAction } from '@store/modules/gallery/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content } from './styles';
import PageHeader from '@modules/headers/elements/PageHeader';
import SearchGallery from '@modules/blocks/elements/SearchGallery';
import ActionsGallery from '@modules/blocks/elements/ActionsGallery';
import List from '@modules/sessions/elements/List';
import { SESSIONS_LIST_GALLERY } from '@constants/SessionLists';

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

  function categoryAction(query) {
    dispatch(queryAction({ query }));
  }

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('gallery.title')} subTitle={t('gallery.subTitle')} />
        <SearchGallery />
        <ActionsGallery />
        <List sessions={decks} type={SESSIONS_LIST_GALLERY} />
     </Content>
    </Wrapper>
  ); 
}