import React from 'react';
import { useTranslation } from 'react-multi-lang';

import PageHeader from '@modules/headers/elements/PageHeader';

import { Wrapper, Content, Paragraph } from './styles';

export default function PrivacyPolicy() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('privacyPolicy.title')} subTitle={''}/>

        {t('privacyPolicy.content').split("|").map((x, i) => (
          <Paragraph key={i}>{x}</Paragraph>
        ))}
      </Content>
    </Wrapper>
  ); 
}