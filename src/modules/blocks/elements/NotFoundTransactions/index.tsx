import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Container, Title } from "./styles"

export default function NotFoundTransactions() {
  const t = useTranslation()
  
  return (
    <Wrapper>
        <Container>
          <Title>{t('transaction.notFound')}</Title>       
        </Container>
    </Wrapper>
  );
}