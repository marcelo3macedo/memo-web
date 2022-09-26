import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';
import { RootState } from '@store/modules/rootReducer';

import PageHeader from '@modules/headers/elements/PageHeader';

import { Wrapper } from './styles';

export default function MessageWelcome() {
  const t = useTranslation()
  const { name } = useSelector((state:RootState) => state.auth);
  const userName = name ? name : t('welcome.user')
  
  return (
    <Wrapper>
      <PageHeader title={`${t('welcome.title')} ${userName}!`} subTitle={t('welcome.message')} />
    </Wrapper>
  );
}