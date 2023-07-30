import AdBanner from '@components/ads/banner';
import ListGallery from '@components/gallery/list';
import { TopHeader } from '@components/header/top';
import { FiltersModal } from '@components/modals/filters';
import { SearchWithFilter } from '@components/search/withFilters';
import { DECK_FILTER_MODAL } from '@constants/deck';
import getQueryValue from '@helpers/QueryHelper';
import { loadAction as loadFilterAction } from '@store/modules/filters/actions';
import { loadAction, searchAction } from '@store/modules/galleries/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { Content, Wrapper } from './styles';

export function Gallery() {
  const [modal, setModal] = useState('');
  const { t } = useTranslation();
  const location = useLocation();
  const { results, loading, pages, actualPage } = useSelector(
    (state: RootState) => state.galleries
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const value = getQueryValue('query', location);
    value ? dispatch(searchAction({ value })) : dispatch(loadAction());
    dispatch(loadFilterAction());
  }, [dispatch]);

  function closeAction() {
    setModal('');
  }

  function showFilter() {
    setModal(DECK_FILTER_MODAL);
  }

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('gallery.title')}
          description={t('gallery.subTitle')}
        />
        <SearchWithFilter action={showFilter} />
        <AdBanner id="ca-pub-9829912735551664" slot="6923331807" />
        <ListGallery
          sessions={results}
          type="public"
          loading={loading}
          pages={pages}
          actualPage={actualPage}
        />
      </Content>
      <FiltersModal modal={modal} closeAction={closeAction} />
    </Wrapper>
  );
}
