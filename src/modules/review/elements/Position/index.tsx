import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Info } from './styles';

export default function Position({ actual, total }: any) {
  const t = useTranslation();
  const info = `${t('review.question')} ${actual} ${t('review.of')} ${total}`;

  return (
    <Wrapper>
      <Content>
        <Info>{info}</Info>
      </Content>
    </Wrapper>
  );
}
