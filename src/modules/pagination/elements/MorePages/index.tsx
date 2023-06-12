import ButtonSecondary from '@components/button/ButtonSecondary';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content } from './styles';

export default function MorePages({ pages, actualPage, action }: any) {
  const t = useTranslation();
  if (actualPage >= pages || pages === 1) return <></>;

  return (
    <Wrapper>
      <Content>
        <ButtonSecondary content={t('pagination.message')} action={action} />
      </Content>
    </Wrapper>
  );
}
