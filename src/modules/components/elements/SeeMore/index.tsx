import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { ELEMENTS_MIN_EXTEND } from '@constants/Elements';
import ISeeMoreOptions from '@modules/components/dtos/ISeeMoreOptions';

import { Wrapper, Content } from './styles';

export default function SeeMore({ elements }:ISeeMoreOptions) {
  const t = useTranslation()

  if (!elements || elements.length < ELEMENTS_MIN_EXTEND) {
    return <></>
  }

  return (
    <Wrapper>
      <Content>{t('elements.seeMore')}</Content>
    </Wrapper>
  );
}