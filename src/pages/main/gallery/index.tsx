import ListGallery from '@components/gallery/list';
import { TopHeader } from '@components/header/top';
import { SearchWithFilter } from '@components/search/withFilters';
import { useTranslation } from 'react-i18next';

import { Content, Wrapper } from './styles';

export function Gallery() {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('gallery.title')}
          description={t('gallery.subTitle')}
        />
        <SearchWithFilter />
        <ListGallery sessions={[]} type="public" />
      </Content>
    </Wrapper>
  );
}
