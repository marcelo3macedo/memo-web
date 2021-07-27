import React from 'react';
import { useTranslation } from 'react-multi-lang';

import SelectBox from '@components/select/SelectBox';
import { Wrapper, Content, Title } from './styles';

export default function DecksFilter() {
  const t = useTranslation()
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <Wrapper>
      <Content>
        <Title>{t('filter.title')}</Title>
        <SelectBox options={options} />
      </Content>
    </Wrapper>
  );
}