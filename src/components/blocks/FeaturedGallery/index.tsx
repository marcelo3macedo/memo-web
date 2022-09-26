import React from 'react';
import { useTranslation } from 'react-multi-lang';

import SubTitle from '@components/elements/SubTitle';
import List from '@components/featured/List';

import { Wrapper, Container } from './styles';

export default function FeaturedGallery({featuredDecks=[]}) {
  const t = useTranslation()
  
  if (featuredDecks.length === 0) {
    return <></>;
  }

  return (
    <Wrapper>
      <Container>
        <SubTitle title={t('blocks.featured')} />
        <List sessions={featuredDecks} />
      </Container>
    </Wrapper>
  );
}