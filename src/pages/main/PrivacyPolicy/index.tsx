import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Paragraph } from './styles';

export default function PrivacyPolicy() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Title>{t('privacyPolicy.title')}</Title>
        {t('privacyPolicy.content').split("|").map((x, i) => (
          <Paragraph key={i}>{x}</Paragraph>
        ))}
      </Content>
    </Wrapper>
  ); 
}