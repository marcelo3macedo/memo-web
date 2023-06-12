import aboutSystem from '@assets/banners/about-system.png';
import PageHeader from '@modules/headers/elements/PageHeader';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Paragraph, Footer, Picture } from './styles';

export default function About() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <PageHeader title={t('about.title')} subTitle={''} />
        {t('about.content')
          .split('|')
          .map((x, i) => (
            <Paragraph key={i}>{x}</Paragraph>
          ))}
      </Content>
      <Footer>
        <Picture src={aboutSystem} />
      </Footer>
    </Wrapper>
  );
}
