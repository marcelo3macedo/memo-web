import { ItemImage } from '@components/config/itemImage';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TopHeader } from '@components/header/top';
import { ItemProgress } from '@components/progress/item';
import { useTranslation } from 'react-i18next';

import { Content, Item, Items, Row, Wrapper } from './styles';

export function Progress() {
  const { t } = useTranslation();

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

            <Row>
              <ItemImage value="level" />
            </Row>
          </Item>
          <Item>
            <SubtitleText value={t('progress.progress')} />

            <Row>
              <ItemProgress title={t('progress.reviewMade')} value={'1'} />
              <ItemProgress title={t('progress.sessionReviewed')} value={'1'} />
              <ItemProgress title={t('progress.lastReview')} value={'1'} />
              <ItemProgress title={t('progress.studyTime')} value={'1'} />
            </Row>
          </Item>
        </Items>
      </Content>
    </Wrapper>
  );
}
