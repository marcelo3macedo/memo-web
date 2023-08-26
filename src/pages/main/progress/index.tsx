import { ItemImage } from '@components/config/itemImage';
import { SmallLoading } from '@components/elements/loading/small';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TopHeader } from '@components/header/top';
import { ItemProgress } from '@components/progress/item';
import { ItemFeatured } from '@components/progress/itemFeatured';
import { getTimeFromNow } from '@helpers/DateHelper';
import getMedalByPoints from '@helpers/MedalHelper';
import { loadAction } from '@store/modules/progress/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Content, Item, Items, Row, RowFlex, Wrapper } from './styles';

export function Progress() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { loading, progress }: any = useSelector(
    (state: RootState) => state.progress
  );

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (loading) {
    return <SmallLoading />;
  }

  const level = `${t('progress.level')}`;
  const points = progress?.points || 0;
  const reviewMade = progress?.reviewsCompleted || 0;
  const sessionReviewed = progress?.sessionsCompleted || 0;
  const lastReview = getTimeFromNow(progress?.lastReview) || '-';
  const studyTime = progress?.studyTime || '-';

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('progress.title')}
          description={t('progress.subTitle')}
        />
        <Items>
          <Item>
            <SubtitleText value={t('progress.generalStatitics')} />

            <RowFlex>
              <ItemImage logo={getMedalByPoints(points)} value={level} />
              <ItemFeatured title={points} value={t('progress.points')} />
            </RowFlex>
          </Item>
          <Item>
            <SubtitleText value={t('progress.progress')} />

            <Row>
              <ItemProgress
                title={t('progress.reviewMade')}
                value={reviewMade}
              />
              <ItemProgress
                title={t('progress.sessionReviewed')}
                value={sessionReviewed}
              />
              <ItemProgress
                title={t('progress.lastReview')}
                value={lastReview}
              />
              <ItemProgress title={t('progress.studyTime')} value={studyTime} />
            </Row>
          </Item>
        </Items>
      </Content>
    </Wrapper>
  );
}
