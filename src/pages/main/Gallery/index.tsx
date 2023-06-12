import PageLoading from '@components/loading/PageLoading';
import { SESSIONS_LIST_GALLERY } from '@constants/SessionLists';
import ActionsGallery from '@modules/blocks/elements/ActionsGallery';
import SearchGallery from '@modules/blocks/elements/SearchGallery';
import PageHeader from '@modules/headers/elements/PageHeader';
import List from '@modules/sessions/elements/List';
import { loadAction } from '@store/modules/gallery/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import { Content, Wrapper } from './styles';

export default function GalleryPage() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { decks, isLoading } = useSelector((state: RootState) => state.gallery);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  if (isLoading) {
    return <PageLoading />;
  }

  return (
    <Wrapper>
      <Content>
        <PageHeader
          title={t('gallery.title')}
          subTitle={t('gallery.subTitle')}
        />
        <SearchGallery />
        <ActionsGallery />
        <List sessions={decks} type={SESSIONS_LIST_GALLERY} />
      </Content>
    </Wrapper>
  );
}
