import { TopHeader } from '@components/header/top';
import { ReviewList } from '@components/lists/reviews';
import { loadAction } from '@store/modules/pending/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Content, Wrapper } from './styles';

export function ReviewPending() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { results, pages, total, actualPage, loading } = useSelector(
    (state: RootState) => state.pending
  );

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('pendingReview.title')}
          description={t('pendingReview.description')}
        />

        <ReviewList
          actualPage={actualPage}
          pages={pages}
          results={results}
          loading={loading}
          total={total}
        />
      </Content>
    </Wrapper>
  );
}
