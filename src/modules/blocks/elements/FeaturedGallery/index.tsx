import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { SESSIONS_LIST_FEATURED } from '@constants/SessionLists';
import SubTitle from '@components/elements/SubTitle';
import { RootState } from '@store/modules/rootReducer';
import List from '@modules/sessions/elements/List';

import { Wrapper, Container } from './styles';

export default function FeaturedGallery() {
  const t = useTranslation()
  const { featuredDecks } = useSelector((state:RootState) => state.user);
  
  if (!featuredDecks || featuredDecks.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Container>
        <SubTitle title={t('blocks.featured')} />
        <List sessions={featuredDecks} type={SESSIONS_LIST_FEATURED} />
      </Container>
    </Wrapper>
  );
}