import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title } from './styles';

export default function Pagination({ callback, visible=false }) {
  const t = useTranslation();

  return (
    <Wrapper visible={visible} className='no-select'>
      <Content onClick={callback}>
        <Title>{t('pagination.message')}</Title>
      </Content>
    </Wrapper>
  );
}