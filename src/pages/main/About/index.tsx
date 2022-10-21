import React from 'react';
import { useTranslation } from 'react-multi-lang';

import PageHeader from '@modules/headers/elements/PageHeader';

import { Wrapper, Content, Paragraph } from './styles';

export default function About() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('about.title')} subTitle={''} />
        {t('about.content').split("|").map((x, i) => (
          <Paragraph key={i}>{x}</Paragraph>
        ))}
      </Content>
    </Wrapper>
  ); 
}