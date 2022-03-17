import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Message } from './styles';

export default function SearchResults({ query }) {
  const t = useTranslation();

  if (!query) {
    return <></>;
  }
  
  return (
    <Wrapper>
      <Content>
        <Message>{t('search.results')} {query}</Message>
      </Content>
    </Wrapper>
  );
}