import React from 'react';
import { useTranslation } from 'react-multi-lang';

import notFound from '@assets/notFound.png';

import { Wrapper, Content, Title, Picture } from './styles';

export default function NotFound() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Picture src={notFound} />
        <Title>{t('notFound.deck')}</Title>
      </Content>
    </Wrapper>
  );
}