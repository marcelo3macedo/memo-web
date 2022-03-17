import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, Paragraph } from './styles';

export default function About() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Title>{t('about.title')}</Title>
        {t('about.content').split("|").map((x, i) => (
          <Paragraph key={i}>{x}</Paragraph>
        ))}
      </Content>
    </Wrapper>
  ); 
}