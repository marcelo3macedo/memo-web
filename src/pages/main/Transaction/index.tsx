import React, { useEffect } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch } from 'react-redux';

import PageHeader from '@modules/headers/elements/PageHeader';
import ListTransactions from '@modules/blocks/elements/ListTransactions';
import { loadAction } from '@store/mods/transactions/actions';

import { Wrapper, Content } from './styles';

export default function Transaction() {
  const t = useTranslation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAction())
  }, [dispatch])

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('transaction.title')} subTitle={t('transaction.subtitle')} />
        <ListTransactions />
      </Content>   
    </Wrapper>
  )
}