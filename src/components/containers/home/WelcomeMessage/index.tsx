import HeaderPage from '@components/header/HeaderPage';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper } from './styles';

export default function WelcomeMessage({ name }) {
  const t = useTranslation();
  const userName = name ? name : t('welcome.user');

  return (
    <Wrapper>
      <HeaderPage
        title={`${t('welcome.title')} ${userName} !`}
        subTitle={t('welcome.message')}></HeaderPage>
    </Wrapper>
  );
}
