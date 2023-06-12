import PageHeader from '@modules/headers/elements/PageHeader';
import List from '@modules/histories/elements/List';
import LoadingPage from '@modules/loading/elements/LoadingPage';
import MorePages from '@modules/pagination/elements/MorePages';
import { loadAction, loadMoreAction } from '@store/mods/histories/actions';
import { RootState } from '@store/modules/rootReducer';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper, Content } from './styles';

export default function History() {
  const t = useTranslation();
  const dispatch = useDispatch();
  const { sessions, isLoading, pages, actualPage } = useSelector(
    (state: RootState) => state.histories
  );

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  function loadMoreClick() {
    dispatch(loadMoreAction());
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader
          title={t('history.title')}
          subTitle={t('history.subTitle')}
        />
        <List sessions={sessions} />
        <MorePages
          pages={pages}
          actualPage={actualPage}
          action={loadMoreClick}
        />
      </Content>
    </Wrapper>
  );
}
