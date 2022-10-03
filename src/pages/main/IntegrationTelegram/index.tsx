import React from 'react';
import { useTranslation } from 'react-multi-lang';

import PageHeader from '@modules/headers/elements/PageHeader';

import { Wrapper, Content } from './styles';

export default function IntegrationTelegram() {
  const t = useTranslation()
  
  return (
    <Wrapper>
      <Content>
        <PageHeader title={"Telegram"} subTitle={t('integrations.subTitle')} />
      </Content>
    </Wrapper>
  ); 
}