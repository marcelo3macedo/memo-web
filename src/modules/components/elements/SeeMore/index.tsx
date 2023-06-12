import { ELEMENTS_MIN_EXTEND } from '@constants/Elements';
import ISeeMoreOptions from '@modules/components/dtos/ISeeMoreOptions';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content } from './styles';

export default function SeeMore({ elements, callback }: ISeeMoreOptions) {
  const t = useTranslation();

  if (!elements || elements.length < ELEMENTS_MIN_EXTEND) {
    return <></>;
  }

  return (
    <Wrapper onClick={callback}>
      <Content>{t('elements.seeMore')}</Content>
    </Wrapper>
  );
}
