import SubTitle from '@components/elements/SubTitle';
import { SESSIONS_LIST_FEATURED } from '@constants/SessionLists';
import List from '@modules/sessions/elements/List';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { Wrapper, Container, Details } from './styles';

export default function FeaturedGallery() {
  const t = useTranslation();
  const { featuredDecks } = useSelector((state: RootState) => state.users);

  if (!featuredDecks || featuredDecks.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Container>
        <SubTitle title={t('blocks.featured')} />
        <Details>{t('blocks.details')}</Details>
        <List sessions={featuredDecks} type={SESSIONS_LIST_FEATURED} />
      </Container>
    </Wrapper>
  );
}
