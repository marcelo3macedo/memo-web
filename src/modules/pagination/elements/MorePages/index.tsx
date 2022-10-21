import React from 'react';
import { useTranslation } from 'react-multi-lang';

import ButtonSecondary from '@components/button/ButtonSecondary';

import { Wrapper, Content } from './styles';

export default function MorePages({ pages, actualPage, action }) {  
  const t = useTranslation()  
  if (actualPage >= pages) return <></>

  return (
    <Wrapper>
      <Content>
        <ButtonSecondary content={t('pagination.message')} action={action} />             
      </Content>
    </Wrapper>
  );
}