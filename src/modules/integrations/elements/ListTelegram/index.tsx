import React from 'react';
import { useTranslation } from 'react-multi-lang';
import { useSelector } from 'react-redux';
import PageLoading from '@components/loading/PageLoading';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, Options } from './styles';
import IndexTelegram from '../IndexTelegram';

export default function ListTelegram() {
  const t = useTranslation()
  const { list, isLoading } = useSelector((state:RootState) => state.integrations)

  if (isLoading) {
    return <PageLoading />;
  }

  if (!list) {
    return <></>;
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('integrations.telegram.myUsers')}</Title>
        <Options>
          { list.map((l, i) => (<IndexTelegram key={i} item={l} />))}
        </Options>
      </Content>
    </Wrapper>
  );
}