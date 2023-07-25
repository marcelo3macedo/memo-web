import ListGallery from '@components/gallery/list';
import { TopHeader } from '@components/header/top';
import { SearchWithFilter } from '@components/search/withFilters';
import { loadAction } from '@store/modules/featuredUser/actions';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Content, Wrapper } from './styles';

export function Session() {
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
        <SearchWithFilter />
        <ListGallery
          sessions={[]}
          type="public"
          loading={false}
          actualPage={0}
          pages={0}
        />
      </Content>
    </Wrapper>
  );
}
