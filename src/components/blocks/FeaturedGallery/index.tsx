import List from '@components/featured/List';
import Subtitle from '@modules/headers/elements/Subtitle';
import { RootState } from '@store/modules/rootReducer';
import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';

import { Wrapper, Container } from './styles';

export default function FeaturedGallery() {
  const t = useTranslation();
  const { featuredDecks } = useSelector((state: RootState) => state.users);

  if (!featuredDecks || featuredDecks.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Container>
        <Subtitle title={t('blocks.featured')} />
        <List sessions={featuredDecks} />
      </Container>
    </Wrapper>
  );
}
