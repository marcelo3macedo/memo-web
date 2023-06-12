import PageHeader from '@modules/headers/elements/PageHeader';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Paragraph } from './styles';

export default function TermsConditions() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('termsAndConditions.title')} subTitle={''} />

        {t('termsAndConditions.content')
          .split('|')
          .map((x, i) => (
            <Paragraph key={i}>{x}</Paragraph>
          ))}
      </Content>
    </Wrapper>
  );
}
