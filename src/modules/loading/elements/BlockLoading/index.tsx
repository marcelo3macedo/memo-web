import IconLarge from '@components/icons/IconLarge';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title } from './styles';

export default function BlockLoading({ loading }: any) {
  const t = useTranslation();

  if (!loading) return <></>;

  return (
    <Wrapper>
      <Content>
        <IconLarge name={'loading'} />
        <Title>{t('loading.message')}</Title>
      </Content>
    </Wrapper>
  );
}
