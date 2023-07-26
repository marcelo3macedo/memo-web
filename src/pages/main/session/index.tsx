import ListGallery from '@components/gallery/list';
import { TopHeader } from '@components/header/top';
import { SearchPrivate } from '@components/search/private';
import { RootState } from '@store/modules/rootReducer';
import { loadAction } from '@store/modules/sessions/actions';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Content, Wrapper } from './styles';

export function Session() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { results, pages, actualPage, loading } = useSelector(
    (state: RootState) => state.sessions
  );

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('sessions.title')}
          description={t('sessions.subTitle')}
        />
        <SearchPrivate />
        <ListGallery
          sessions={results}
          type="private"
          loading={loading}
          actualPage={actualPage}
          pages={pages}
        />
      </Content>
    </Wrapper>
  );
}
