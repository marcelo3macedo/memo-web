import React from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';
import { RootState } from '@store/modules/rootReducer';

import { formatDateTimeAsString } from '@helpers/DateHelper';
import NotFoundTransactions from '../NotFoundTransactions';

import { Wrapper, Container, Header, Body, HeaderTitle, Line, LineContent } from "./styles"

export default function ListTransactions() {
  const t = useTranslation()
  const { transactions } = useSelector((state:RootState) => state.transactions)

  if (!transactions || transactions.length === 0) {
    return <NotFoundTransactions />
  }

  return (
    <Wrapper>
        <Container>
          <Header>
            <HeaderTitle>{t('transaction.options.date')}</HeaderTitle>
            <HeaderTitle>{t('transaction.options.value')}</HeaderTitle>
          </Header>
          <Body>
            { transactions.map((t, i) => (
              <Line key={i}>
                <LineContent>{formatDateTimeAsString(t.createdAt)}</LineContent>
                <LineContent>{t.value}</LineContent>
              </Line>
            ))}
          </Body>
        </Container>
    </Wrapper>
  );
}